var tone = require('tonegenerator')
var header = require('waveheader')

var data = module.exports.data = require('./data')

var frequencies = {
  '0' => 16386,
  '1' => 16943,
  'X' => 17500, // base frequency, used to construct raw commands (delta is approx 557Hz)
  '3' => 18057,
  '2' => 18614
}

module.exports.create_wav = function(code){
  var c = ('X' + ('' + code).split('').join('X') + 'X').split('')
  
}

module.exports.read_code = function(wav_data){

}
