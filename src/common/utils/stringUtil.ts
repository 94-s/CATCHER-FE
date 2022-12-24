class StringUtil {
  /**
   * string 빈값 여부
   * param value string
   * return boolean
   */
  static isNullOrEmpty(value: string): boolean {
    if (typeof value === 'undefined') {
      return true;
    }
    if (value === '' || value === null || value === undefined) {
      return String(value) !== String(0);
    } else {
      return false;
    }
  }

  /**
   * 3번째 자릿수 마다 콤마
   */
  static addComma(text: string | number) {
    let setText = String(text);
    if (typeof setText === undefined || null) {
      return '';
    } else {
      return setText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  /**
   * 마지막 3번째 글자부터 블러 처리 (*)
   */
  static maskingText = (strCar: string) => {
    if (strCar === undefined || strCar === '') {
      return '';
    }
    var pattern = /.{3}$/;
    return strCar.replace(pattern, '***');
  };
}

export default StringUtil;
