package us.orosapp.lifearoundus.companion;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.SslErrorHandler;
import android.net.http.SslError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/** Minimal Android WebView companion. No local game assets or script bridge. */
public final class MainActivity extends Activity {
    private static final String URL = "https://life.orosapp.us/?platform=android";
    private WebView web;
    private void fullscreen() {
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_FULLSCREEN |
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
    }
    @Override public void onCreate(Bundle state) {
        super.onCreate(state);getWindow().setStatusBarColor(Color.BLACK);
        getWindow().setNavigationBarColor(Color.BLACK);fullscreen();
        web = new WebView(this);web.setBackgroundColor(Color.BLACK);
        WebSettings s=web.getSettings();s.setJavaScriptEnabled(true);s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false);s.setAllowContentAccess(false);
        s.setAllowFileAccessFromFileURLs(false);s.setAllowUniversalAccessFromFileURLs(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setMediaPlaybackRequiresUserGesture(true);s.setLoadsImagesAutomatically(true);
        s.setUseWideViewPort(true);s.setLoadWithOverviewMode(false);
        web.setWebViewClient(new WebViewClient(){
            @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){
                Uri url=request.getUrl();
                if("https".equalsIgnoreCase(url.getScheme()) && "life.orosapp.us".equalsIgnoreCase(url.getHost()))return false;
                if("https".equalsIgnoreCase(url.getScheme())){
                    startActivity(new Intent(Intent.ACTION_VIEW,url));return true;
                }
                return true;
            }
            @Override public void onReceivedSslError(WebView v,SslErrorHandler handler,SslError error){handler.cancel();}
        });
        setContentView(web);
        if(state!=null)web.restoreState(state);else web.loadUrl(URL);
    }
    @Override protected void onSaveInstanceState(Bundle state){if(web!=null)web.saveState(state);super.onSaveInstanceState(state);}
    @Override public void onBackPressed(){if(web!=null&&web.canGoBack())web.goBack();else new AlertDialog.Builder(this).setMessage("Close Life Around Us?")
        .setNegativeButton("Stay",null).setPositiveButton("Close",(d,w)->finish()).show();}
    @Override protected void onDestroy(){if(web!=null){web.destroy();web=null;}super.onDestroy();}
}
