const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;


// (async () => {
//   let marah = 0;
//  let tidakmarah = 0;
//   var data1 = await promiseTheaterIXX();
//   // var data2 = await promiseTheaterVGC();
//   for (let i = 0 ; i<data1.length; i++) {
//     if (data1[i]["hasil"] == "marah") {
//       marah +=1;
//     } else {
//       tidakmarah +=1;
//     }
//   };
//   console.log(marah + " " + tidakmarah);
// })();

async function validasi_data(param) {
    let data1 = await promiseTheaterIXX();
    let data2 = await promiseTheaterVGC();

    let dataall = [];
    dataall.push(...data1,...data2);
    
    let marah = 0;
    let tidakmarah = 0;
    for (let i = 0 ; i<dataall.length; i++) {
      if (dataall[i]["hasil"] == "marah") {
        marah +=1;
      } else {
        tidakmarah +=1;
      }
    };

    if (param == 1) {
      return marah;
    } else {
      return tidakmarah;
    }
   
}


const promiseOutput = async(param) => {
    return new Promise((resolve, reject) => {
        //console.log(marah());
        if (param == "marah") {
          return resolve(validasi_data(1));
        } else if (param == "tidak marah") {
          return resolve(validasi_data(0));
        } else {
          return reject("Unknow");
        }
    })
}


module.exports = {
  promiseOutput,
};

