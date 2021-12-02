 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
     // div id player
     new YT.Player('player', {
         videoId: '0HWT484gLaI', //최초재생할 유튜브 영상 ID
         playerVers: {
             autoplay: true, //자동 재생 여부
             loop: true, //반복재생 유무
             playlist: '0HWT484gLaI' //반복재생할 유튜브 ID 목록
         },
         events: {
            onReady: function(event){
                event.target.mute();//음소거
            }
         }
     });
 }