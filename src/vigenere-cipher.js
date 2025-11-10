const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  process(message, key, decryptOrEncrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex === -1) {
        result += char;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyCharIndex = this.alphabet.indexOf(keyChar);

      let processedCharIndex = 0;

      if (decryptOrEncrypt){
        processedCharIndex = (charIndex + keyCharIndex) % this.alphabet.length;
      } else {
        processedCharIndex = (charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
      }

      result += this.alphabet[processedCharIndex];
      keyIndex += 1;
    }

    let finalResult;
    if (this.isDirect) {
      finalResult = result;
    } else {
      finalResult = result.split('').reverse().join('');
    }
    return finalResult;
  }

  encrypt(message, key) {
      return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
      return this.process(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};