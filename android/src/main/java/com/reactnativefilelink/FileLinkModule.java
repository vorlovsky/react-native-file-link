package com.reactnativefilelink;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = FileLinkModule.NAME)
public class FileLinkModule extends ReactContextBaseJavaModule {
    public static final String NAME = "FileLinkModule";

    public FileLinkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void createHardLink(String src, String dest, Promise promise) {        
        promise.resolve(src);
    }

    @ReactMethod
    public void createSymbolicLink(String src, String dest, Promise promise) {
        promise.resolve(src);
    }

    @ReactMethod
    public void removeLink(String dest, Promise promise) {
        promise.resolve(dest);
    }

}
