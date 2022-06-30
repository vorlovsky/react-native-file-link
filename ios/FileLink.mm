#import "FileLink.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNFileLinkSpec.h"
#endif

@implementation FileLink
RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(createHardLink,
                 createHardLinkWithSrc:(nonnull NSString*)src withDest:(nonnull NSString*)dest
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSFileManager *fm = [NSFileManager defaultManager];
  NSError *error; 
  if ([fm linkItemAtPath:src toPath:dest error:&error]) {
    resolve(dest);
  } else {
    reject(@"failure", @"failed to create hard link", nil);
  }  
}

RCT_REMAP_METHOD(createSymbolicLink,
                 createSymbolicLinkWithSrc:(nonnull NSString*)src withDest:(nonnull NSString*)dest
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSFileManager *fm = [NSFileManager defaultManager];
  NSError *error; 
  if ([fm createSymbolicLinkAtPath:dest withDestinationPath:src error:&error]) {
    resolve(dest);
  } else {
    reject(@"failure", @"failed to create symbolic link", nil);
  }  
}

RCT_REMAP_METHOD(removeLink,
                 removeLinkWithDest:(nonnull NSString*)dest
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSFileManager *fm = [NSFileManager defaultManager];
  NSError *error; 
  if ([fm removeItemAtPath:dest error:&error]) {
    resolve(dest);
  } else {
    reject(@"failure", @"failed to remove link", nil);
  }  
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeFileLinkSpecJSI>(params);
}
#endif

@end
