#pragma once
#include <cstdint>
#include <string>
#include <vector>

namespace life {
constexpr int kWidth = 1280;
constexpr int kHeight = 720;
struct City {
    std::string name;
    std::string country;
    std::string photo;
    std::string temperature;
    std::string headline;
    float latitude = 0;
    float longitude = 0;
    int utcOffset = 0;
};
struct Image {
    int width = 0;
    int height = 0;
    std::vector<uint32_t> rgb;
    bool loadBmp(const std::string& path);
    uint32_t sample(int x, int y) const;
};
struct App {
    Image earth;
    Image sky;
    Image night;
    Image photo;
    std::string assetDirectory;
    std::vector<uint8_t> clouds;
    std::vector<uint8_t> liveLogo;
    int loadedPhoto = -1;
    std::vector<City> cities;
    std::vector<uint32_t> framebuffer;
    int selected = 0;
    float yaw = 0;
    float zoom = 1;
    bool menu = false;
    int menuPage = 0;
    int menuChoice = 0;
    bool fahrenheit = false;
    bool autoTour = true;
    bool running = true;
    bool haveEarth = false;
    bool haveSky = false;
    bool loadAssets(const std::string& directory);
    void select(int delta);
    void input(uint32_t pressed, float rightX = 0);
    void render();
};
enum Buttons : uint32_t {
    LEFT=1u<<0, RIGHT=1u<<1, UP=1u<<2, DOWN=1u<<3,
    CROSS=1u<<4, CIRCLE=1u<<5, TRIANGLE=1u<<6, OPTIONS=1u<<7,
    L1=1u<<8, R1=1u<<9
};
}
