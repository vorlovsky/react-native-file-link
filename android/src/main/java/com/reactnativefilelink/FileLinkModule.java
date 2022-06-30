package com.reactnativefilelink;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = FileLinkModule.NAME)
public class FileLinkModule extends ReactContextBaseJavaModule {
    public static final String NAME = "FileLink";

    public FileLinkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void createHardLink(double a, double b, Promise promise) {
        promise.reject("failure", "Not supported");
    }

    @ReactMethod
    public void createSymbolicLink(double a, double b, Promise promise) {
        promise.reject("failure", "Not supported");
    }

    @ReactMethod
    public void removeLink(double a, double b, Promise promise) {
        promise.reject("failure", "Not supported");
    }

}
