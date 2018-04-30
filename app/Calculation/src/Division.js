/**
 * Division 
 *
 * @exports Division
 */
export default class Division {
    constructor(options) {
    }
    calculate(a, b) {
	if (!b || (b == 0)) {
	    return 'infinity';
	}
	return a / b;
    }
}
