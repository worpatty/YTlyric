function closeCurrentActivity(){
    try{
        App.closeWindow();
    } catch(e){

    }
    // href 대신 쓰이는 경우가 많으므로 return false로 onclick 이벤트에서 href 행동을 방지
    return false;
}

function openActivity(url, isActiveBottomBar){
    try{
        App.openNewWindow(url, isActiveBottomBar);
    } catch(e){

    }

    return false;
}

function showBottomBar(){
    try{
        App.enableBottomBar(true);
    } catch(e){

    }
}

function hideBottomBar(){
    try{
        App.enableBottomBar(false);
    } catch(e){

    }
}

// googlePlay 엡 실행해서 fanttube 페이지로
function openMarket(){
    try{
        App.oenMarket();
    }catch(e){

    }

    return false;
}
