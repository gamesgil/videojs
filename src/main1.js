var _0xd82e=["\x6D\x79\x2D\x76\x69\x64\x65\x6F","\x23\x62\x74\x6E\x46\x6F\x72\x77\x61\x72\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x23\x62\x74\x6E\x42\x61\x63\x6B","\x23\x62\x74\x6E\x52\x6F\x74\x61\x74\x65\x52\x69\x67\x68\x74","\x23\x62\x74\x6E\x52\x6F\x74\x61\x74\x65\x4C\x65\x66\x74","\x23\x62\x74\x6E\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E","\x33\x36\x30","\x76\x72","\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x58","\x63\x61\x6D\x65\x72\x61","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6D\x6F\x75\x73\x65\x75\x70","\x63\x6C\x69\x63\x6B","\x72\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E","\x70\x61\x75\x73\x65"];const player=videojs(_0xd82e[0]);const btnForward=document[_0xd82e[2]](_0xd82e[1]);const btnBack=document[_0xd82e[2]](_0xd82e[3]);const btnRotateRight=document[_0xd82e[2]](_0xd82e[4]);const btnRotateLeft=document[_0xd82e[2]](_0xd82e[5]);const btnFullscreen=document[_0xd82e[2]](_0xd82e[6]);const vr=player[_0xd82e[8]]({projection:_0xd82e[7]});let state=false;let direction=1;let rotation=0;const advanceFrame=()=>{if(state){player[_0xd82e[9]](player[_0xd82e[9]]()+ direction* 0.05)};if(rotation){vr[_0xd82e[11]][_0xd82e[10]](rotation)}};btnForward[_0xd82e[13]](_0xd82e[12],()=>{state= true;direction= 1});btnForward[_0xd82e[13]](_0xd82e[14],()=>state= false);btnBack[_0xd82e[13]](_0xd82e[12],()=>{state= true;direction=  -1});btnBack[_0xd82e[13]](_0xd82e[14],()=>state= false);btnRotateLeft[_0xd82e[13]](_0xd82e[12],()=>rotation= 1);btnRotateRight[_0xd82e[13]](_0xd82e[12],()=>rotation=  -1);btnFullscreen[_0xd82e[13]](_0xd82e[15],()=>{player[_0xd82e[16]]()});document[_0xd82e[13]](_0xd82e[14],()=>rotation= 0);player[_0xd82e[17]]();setInterval(()=>advanceFrame(),1000/ 10)