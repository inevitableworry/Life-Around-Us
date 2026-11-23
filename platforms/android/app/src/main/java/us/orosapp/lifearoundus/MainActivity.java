package us.orosapp.lifearoundus;

import android.app.Activity;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.KeyEvent;
import android.view.InputDevice;
import android.view.MotionEvent;
import android.app.UiModeManager;
import android.content.res.Configuration;
import android.content.pm.PackageManager;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.HttpURLConnection;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class MainActivity extends Activity {
  private static final String TAG="LifeAroundUs";
  private static final String ASSET_HOST="appassets.androidplatform.net";
  private final ExecutorService requests=Executors.newFixedThreadPool(3);
  private WebView web;
  private boolean pageReady=false;
  private final boolean[] stickHeld=new boolean[6];
  private boolean television=false;
  private boolean touchscreen=true;
  private void immersive(){
    getWindow().getDecorView().setSystemUiVisibility(
       View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
       View.SYSTEM_UI_FLAG_FULLSCREEN |
       View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
       View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
       View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
       View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
  }
  @Override public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().setStatusBarColor(Color.BLACK);
    getWindow().setNavigationBarColor(Color.BLACK);
    immersive();
    UiModeManager ui=(UiModeManager)getSystemService(Context.UI_MODE_SERVICE);
    television=(ui!=null&&ui.getCurrentModeType()==Configuration.UI_MODE_TYPE_TELEVISION)
      ||getPackageManager().hasSystemFeature(PackageManager.FEATURE_LEANBACK);
    touchscreen=getPackageManager().hasSystemFeature(PackageManager.FEATURE_TOUCHSCREEN);
    if((getApplicationInfo().flags & android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE)!=0)
      WebView.setWebContentsDebuggingEnabled(true);
    web=new WebView(this);
    web.setBackgroundColor(Color.BLACK);
    web.setLayerType(View.LAYER_TYPE_HARDWARE,null);
    WebSettings settings=web.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setAllowFileAccess(false);
    settings.setAllowContentAccess(false);
    settings.setMediaPlaybackRequiresUserGesture(false);
    settings.setLoadsImagesAutomatically(true);
    settings.setDefaultTextEncodingName("UTF-8");
    settings.setTextZoom(100);
    settings.setUseWideViewPort(true);
    settings.setLoadWithOverviewMode(false);
    settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
    web.addJavascriptInterface(new Host(),"AndroidHost");
    web.setWebChromeClient(new WebChromeClient() {
      @Override public boolean onConsoleMessage(ConsoleMessage msg) {
        Log.i(TAG,"JS "+msg.messageLevel()+" "+msg.sourceId()+":"+msg.lineNumber()+" "+msg.message());
        return true;
      }
    });
    web.setWebViewClient(new WebViewClient() {
      @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request) {
        Uri uri=request.getUrl();
        if(!ASSET_HOST.equalsIgnoreCase(uri.getHost()))return super.shouldInterceptRequest(view,request);
        String path=Uri.decode(uri.getEncodedPath()==null?"":uri.getEncodedPath());
        if(!path.startsWith("/assets/"))return response(404,"text/plain",new ByteArrayInputStream(new byte[0]));
        String relative=path.substring(8);
        if(relative.isEmpty())relative="index.html";
        if(relative.contains("..") || relative.startsWith("/") || relative.contains("\\") || relative.indexOf('\0')>=0)
          return response(403,"text/plain",new ByteArrayInputStream(new byte[0]));
        try{
          InputStream in=getAssets().open("www/"+relative,android.content.res.AssetManager.ACCESS_STREAMING);
          return response(200,mime(relative),in);
        }catch(IOException ex){
          Log.w(TAG,"Missing bundled resource: "+relative);
          return response(404,"text/plain",new ByteArrayInputStream(new byte[0]));
        }
      }
      @Override public void onPageFinished(WebView view,String url) {
        pageReady=true;
        applyDeviceProfile();
        Log.i(TAG,"PAGE READY "+url+" TV="+television+" touch="+touchscreen);
      }
      @Override public void onReceivedError(WebView view,WebResourceRequest request,android.webkit.WebResourceError err){
        if(request.isForMainFrame())Log.e(TAG,"Webview load failed: "+err.getDescription());
      }
    });
    setContentView(web);
    web.setFocusable(true);
    web.setFocusableInTouchMode(true);
    web.requestFocus();
    String page="https://"+ASSET_HOST+"/assets/index.html?rs="+(television?"720":"1080")+"&fps=60";
    if(television) page+="&intro=0";
    if(getIntent().getBooleanExtra("verifyOnly",false)) page+="&intro=0&start=Tripoli";
    web.loadUrl(page);
  }
  private static String mime(String path) {
    String p=path.toLowerCase();
    if(p.endsWith(".html"))return "text/html";
    if(p.endsWith(".js"))return "application/javascript";
    if(p.endsWith(".css"))return "text/css";
    if(p.endsWith(".json")||p.endsWith(".geojson"))return "application/json";
    if(p.endsWith(".svg"))return "image/svg+xml";
    if(p.endsWith(".png"))return "image/png";
    if(p.endsWith(".jpg")||p.endsWith(".jpeg"))return "image/jpeg";
    if(p.endsWith(".webp"))return "image/webp";
    if(p.endsWith(".ttf"))return "font/ttf";
    if(p.endsWith(".woff2"))return "font/woff2";
    if(p.endsWith(".mp3"))return "audio/mpeg";
    if(p.endsWith(".m4a"))return "audio/mp4";
    if(p.endsWith(".wav"))return "audio/wav";
    if(p.endsWith(".frag"))return "text/plain";
    return "application/octet-stream";
  }
  private static WebResourceResponse response(int status,String mime,InputStream stream) {
    Map<String,String> headers=new HashMap<>();
    headers.put("Access-Control-Allow-Origin","*");
    headers.put("Cache-Control","public, max-age=3600");
    return new WebResourceResponse(mime,"UTF-8",status,status==200?"OK":status==403?"Forbidden":"Not Found",headers,stream);
  }
  private void toPage(JSONObject obj) {
    if(web==null)return;
    final String json=JSONObject.quote(obj.toString());
    runOnUiThread(()->{if(web!=null)web.evaluateJavascript(
      "if(window.__LAUAndroidReceive)window.__LAUAndroidReceive("+json+");",null);});
  }
  private class Host {
    @JavascriptInterface public boolean isTelevision(){return television;}
    @JavascriptInterface public boolean hasTouchscreen(){return touchscreen;}
    @JavascriptInterface public void postMessage(String message) {
      final JSONObject payload;
      try{payload=new JSONObject(message);}catch(Exception ex){return;}
      String cmd=payload.optString("cmd","");
      if(cmd.equals("fetch")){
        requests.execute(()->fetchReply(payload));
      }else if(cmd.equals("getMusic")) {
        JSONObject out=new JSONObject();
        try{
          out.put("type","music");
          JSONArray tracks=new JSONArray();
          String[] names=getAssets().list("www/music");
          if(names!=null)for(String name:names)if(name.toLowerCase().endsWith(".mp3"))tracks.put("music/"+name);
          out.put("tracks",tracks);out.put("mine",new JSONArray());out.put("mineNames",new JSONArray());
          toPage(out);
        }catch(Exception e){Log.w(TAG,"Music listing unavailable "+e);}
      }else if(cmd.equals("rumble")){
        try{
          Vibrator vibrator=(Vibrator)getSystemService(Context.VIBRATOR_SERVICE);
          if(vibrator!=null&&vibrator.hasVibrator())
            vibrator.vibrate(VibrationEffect.createOneShot(
              Math.max(20,Math.min(800,payload.optInt("ms",80))),VibrationEffect.DEFAULT_AMPLITUDE));
        }catch(Exception ignored){}
      }else{
        Log.i(TAG,"Shell feature unavailable: "+cmd);
      }
    }
  }
  private static boolean allowedHost(String host) {
    if(host==null||host.isEmpty())return false;
    String h=host.toLowerCase();
    if(h.equals("localhost")||h.equals("127.0.0.1")||h.endsWith(".local")
       ||h.startsWith("192.168.")||h.startsWith("10.")||h.startsWith("172.16."))return false;
    // Known public feeds, endpoint providers and media sites used in the source.
    return h.equals("news.google.com")||h.equals("api.open-meteo.com")
      ||h.equals("api.met.no")||h.equals("get.geojs.io")
      ||h.endsWith(".wikipedia.org")||h.endsWith(".wikimedia.org")
      ||h.endsWith(".nasa.gov")||h.endsWith(".noaa.gov")
      ||h.endsWith(".usgs.gov")||h.endsWith(".gdacs.org")
      ||h.equals("wheretheiss.at")||h.equals("www.youtube.com")
      ||h.endsWith(".radio-browser.info")||h.equals("webservices.volcano.si.edu");
  }
  private void fetchReply(JSONObject input) {
    JSONObject reply=new JSONObject();
    HttpURLConnection connection=null;
    try{
      reply.put("cmd","fetchResult");
      reply.put("id",input.optString("id"));
      String target=input.optString("url","");
      URL url=new URL(target);
      if(!url.getProtocol().equalsIgnoreCase("https")||!allowedHost(url.getHost()))
        throw new SecurityException("Host not allowed for client fetch");
      connection=(HttpURLConnection)url.openConnection();
      connection.setRequestProperty("User-Agent","LifeAroundUs-Android/0.2.0");
      String referrer=input.optString("referer","");
      if(referrer.startsWith("https://"))connection.setRequestProperty("Referer",referrer);
      connection.setInstanceFollowRedirects(false);
      connection.setConnectTimeout(8500);connection.setReadTimeout(15000);
      int status=connection.getResponseCode();
      reply.put("status",status);
      reply.put("finalUrl",target);
      if(status>=300&&status<400){
         String redirected=connection.getHeaderField("Location");
         if(redirected!=null){
           URL next=new URL(url,redirected);
           if(!allowedHost(next.getHost()))throw new SecurityException("Redirect outside allowed hosts");
         }
         throw new IOException("Feed redirected: HTTP "+status);
      }
      if(status<200||status>=300)throw new IOException("Feed HTTP "+status);
      String contentType=connection.getContentType();
      int max=3*1024*1024;
      ByteArrayOutputStream bytes=new ByteArrayOutputStream();
      try(InputStream stream=connection.getInputStream()){
        byte[] buf=new byte[16*1024];int n;
        while((n=stream.read(buf))!=-1) {
          if(bytes.size()+n>max)throw new IOException("Feed exceeds 3MB");
          bytes.write(buf,0,n);
        }
      }
      byte[] data=bytes.toByteArray();
      if(contentType!=null&&contentType.toLowerCase().startsWith("image/")){
        String media=contentType.split(";")[0];
        reply.put("dataUrl","data:"+media+";base64,"+android.util.Base64.encodeToString(data,android.util.Base64.NO_WRAP));
      } else {
        reply.put("text",new String(data,StandardCharsets.UTF_8));
      }
      reply.put("ok",true);
    }catch(Exception err){
      try{reply.put("ok",false);reply.put("error",err.getMessage());}catch(Exception ignored){}
      Log.w(TAG,"Fetch issue "+err.getClass().getSimpleName()+" "+err.getMessage());
    }finally{
      if(connection!=null)connection.disconnect();
      toPage(reply);
    }
  }
  private void applyDeviceProfile(){
    if(web==null||!pageReady)return;
    final String code="(function(){document.documentElement.dataset.tv='"+(television?"1":"0")+
      "';document.documentElement.dataset.touch='"+(touchscreen?"1":"0")+
      "';window.dispatchEvent(new Event('resize'));})();";
    web.evaluateJavascript(code,null);
  }
  @Override public void onWindowFocusChanged(boolean focused){
    super.onWindowFocusChanged(focused);
    if(focused)immersive();
  }
  @Override public void onConfigurationChanged(Configuration configuration){
    super.onConfigurationChanged(configuration);
    immersive();
    applyDeviceProfile();
  }
  private void sendWebKey(String code, boolean down){
    if(web==null||!pageReady)return;
    String payload="if(window.__lauKey)window.__lauKey("+JSONObject.quote(code)+","+(down?"true":"false")+");";
    web.evaluateJavascript(payload,null);
  }
  private static String mapPadKey(int key){
    switch(key){
      case KeyEvent.KEYCODE_DPAD_UP:return "ArrowUp";
      case KeyEvent.KEYCODE_DPAD_DOWN:return "ArrowDown";
      case KeyEvent.KEYCODE_DPAD_LEFT:return "ArrowLeft";
      case KeyEvent.KEYCODE_DPAD_RIGHT:return "ArrowRight";
      case KeyEvent.KEYCODE_DPAD_CENTER:
      case KeyEvent.KEYCODE_ENTER:
      case KeyEvent.KEYCODE_NUMPAD_ENTER:
      case KeyEvent.KEYCODE_BUTTON_A:return "Enter";
      case KeyEvent.KEYCODE_BUTTON_B:
      case KeyEvent.KEYCODE_BACK:
      case KeyEvent.KEYCODE_ESCAPE:return "Escape";
      case KeyEvent.KEYCODE_BUTTON_Y:return "KeyO";
      case KeyEvent.KEYCODE_BUTTON_X:return "KeyM";
      case KeyEvent.KEYCODE_BUTTON_START:return "KeyO";
      case KeyEvent.KEYCODE_BUTTON_SELECT:
      case KeyEvent.KEYCODE_BUTTON_THUMBR:return "KeyV";
      case KeyEvent.KEYCODE_BUTTON_L1:return "KeyQ";
      case KeyEvent.KEYCODE_BUTTON_R1:return "KeyE";
      case KeyEvent.KEYCODE_BUTTON_L2:return "Minus";
      case KeyEvent.KEYCODE_BUTTON_R2:return "Equal";
      default:return null;
    }
  }
  @Override public boolean dispatchKeyEvent(KeyEvent event){
    int code=event.getKeyCode();
    String mapped=mapPadKey(code);
    boolean controller=(event.getSource()&InputDevice.SOURCE_GAMEPAD)==InputDevice.SOURCE_GAMEPAD
      ||(event.getSource()&InputDevice.SOURCE_DPAD)==InputDevice.SOURCE_DPAD
      ||(event.getSource()&InputDevice.SOURCE_JOYSTICK)==InputDevice.SOURCE_JOYSTICK;
    boolean special=code==KeyEvent.KEYCODE_BACK || code>=KeyEvent.KEYCODE_BUTTON_A
      ||(code>=KeyEvent.KEYCODE_DPAD_UP&&code<=KeyEvent.KEYCODE_DPAD_CENTER);
    if(mapped!=null&&(controller||special||television)){
      if(event.getAction()==KeyEvent.ACTION_DOWN){
        if(event.getRepeatCount()==0)sendWebKey(mapped,true);
      }else if(event.getAction()==KeyEvent.ACTION_UP){
        sendWebKey(mapped,false);
      }
      return true;
    }
    return super.dispatchKeyEvent(event);
  }
  private void setStick(int index,boolean pressed,String code){
    if(stickHeld[index]==pressed)return;
    stickHeld[index]=pressed;
    sendWebKey(code,pressed);
  }
  @Override public boolean onGenericMotionEvent(MotionEvent event) {
    if((event.getSource()&InputDevice.SOURCE_JOYSTICK)==InputDevice.SOURCE_JOYSTICK
      &&event.getAction()==MotionEvent.ACTION_MOVE){
      float x=event.getAxisValue(MotionEvent.AXIS_X);
      float y=event.getAxisValue(MotionEvent.AXIS_Y);
      float ry=event.getAxisValue(MotionEvent.AXIS_RZ);
      float l=event.getAxisValue(MotionEvent.AXIS_LTRIGGER);
      float r=event.getAxisValue(MotionEvent.AXIS_RTRIGGER);
      setStick(0,x<-.32f,"KeyA");
      setStick(1,x>.32f,"KeyD");
      setStick(2,y<-.32f,"KeyW");
      setStick(3,y>.32f,"KeyS");
      setStick(4,ry<-.30f||r>.65f,"Equal");
      setStick(5,ry>.30f||l>.65f,"Minus");
      return true;
    }
    return super.onGenericMotionEvent(event);
  }
  @Override public void onBackPressed(){
    sendWebKey("Escape",true);
    sendWebKey("Escape",false);
  }
  @Override public void onDestroy(){
    if(web!=null){web.loadUrl("about:blank");web.destroy();web=null;}
    requests.shutdownNow();
    super.onDestroy();
  }
}
