// 현재 버전 반환
// platform : ios / android
function getCurrentAppVersion(platform){
    var result = {};
    if(!platform) {
        result.resultCode = "error";
        result.resultMessage = "플랫폼은 필수값입니다";

        return JSON.stringify(result);
    }

    platform = platform.toLocaleLowerCase();

    switch(platform){
        case "android":
            result.resultCode="ok";
            result.resultMessage="성공";
            result.platform=platform;
            result.version=1;
            result.isMandatory=true;
            result.updateDate="2018-01-11";
            result.introURL="http://";
            result.updateURL="http://";
            break;
        case "ios":
            result.resultCode="ok";
            result.resultMessage="성공";
            result.platform=platform;
            result.version=1;
            result.isMandatory=true;
            result.updateDate="2018-01-11";
            result.introURL="http://";
            result.updateURL="http://";
            break;
    }

    return JSON.stringify(result);
}
