/////////////////////////////////////////////////////
// Video Shuffle

const shuffle = function (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elemetns to shuffle...
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Make array for the video elements
let videoSource = new Array();
videoSource[0] = '../AllVidsNamed/Adam[1].mp4';
videoSource[1] = '../AllVidsNamed/Adam[2].mp4';
videoSource[2] = '../AllVidsNamed/Adam[3].mp4';
videoSource[3] = '../AllVidsNamed/Adam[4].mp4';
videoSource[4] = '../AllVidsNamed/Adam[5].mp4';
videoSource[5] = '../AllVidsNamed/Adam[6].mp4';
videoSource[6] = '../AllVidsNamed/Adam[7].mp4';
videoSource[7] = '../AllVidsNamed/Adam[8].mp4';
videoSource[8] = '../AllVidsNamed/Bailey[1].mp4';

// Bailey
videoSource[9] = '../AllVidsNamed/Bailey[1]Better.mp4';
videoSource[10] = '../AllVidsNamed/Bailey[2]Better.mp4';
videoSource[11] = '../AllVidsNamed/Bailey[3]better.mp4';

// Ben
videoSource[12] = '../AllVidsNamed/Ben[1]Better.mp4';
videoSource[13] = '../AllVidsNamed/Ben[3]Better.mp4';
videoSource[14] = '../AllVidsNamed/Ben[4]Better.mp4';
videoSource[15] = '../AllVidsNamed/Ben[5]Better.mp4';
videoSource[16] = '../AllVidsNamed/Ben[6]Better.mp4';
videoSource[17] = '../AllVidsNamed/Ben[7]Better.mp4';
videoSource[18] = '../AllVidsNamed/Ben[8]Better.mp4';

// Gabe
videoSource[19] = '../AllVidsNamed/Gabe[1].mp4';
videoSource[20] = '../AllVidsNamed/Gabe[2].mp4';
videoSource[21] = '../AllVidsNamed/Gabe[3].mp4';
videoSource[22] = '../AllVidsNamed/Gabe[4].mp4';
videoSource[23] = '../AllVidsNamed/Gabe[5].mp4';
videoSource[24] = '../AllVidsNamed/Gabe[6].mp4';
videoSource[25] = '../AllVidsNamed/Gabe[7].mp4';
videoSource[26] = '../AllVidsNamed/Gabe[8].mp4';
videoSource[27] = '../AllVidsNamed/Gabe[9].mp4';
videoSource[28] = '../AllVidsNamed/Gabe[10].mp4';
videoSource[29] = '../AllVidsNamed/Gabe[11].mp4';
videoSource[30] = '../AllVidsNamed/Gabe[12].mp4';
videoSource[31] = '../AllVidsNamed/Gabe[13].mp4';
videoSource[32] = '../AllVidsNamed/Gabe[14].mp4';
videoSource[33] = '../AllVidsNamed/Gabe[15].mp4';
videoSource[34] = '../AllVidsNamed/Gabe[16].mp4';
videoSource[35] = '../AllVidsNamed/Gabe[17].mp4';
videoSource[36] = '../AllVidsNamed/Gabe[18].mp4';
videoSource[37] = '../AllVidsNamed/Gabe[19].mp4';
videoSource[38] = '../AllVidsNamed/Gabe[20].mp4';
videoSource[39] = '../AllVidsNamed/Gabe[21].mp4';
videoSource[40] = '../AllVidsNamed/Gabe[22].mp4';
videoSource[41] = '../AllVidsNamed/Gabe[23].mp4';

let videoCount = videoSource.length;

// Using the shuffle function
let shuffleVideoSource = shuffle(videoSource);

document
  .getElementById('videoClips')
  .setAttribute('src', shuffleVideoSource[0]);
