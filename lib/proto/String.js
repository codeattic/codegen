String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
};

String.prototype.capitalize = function () {
	return this[0].toUpperCase() + this.substring(1);
};

String.prototype.decapitalize = function () {
	return this[0].toLowerCase() + this.substring(1);
};

String.prototype.dasherize = function () {
	return this.replace(/.([A-Z])/g, function (s, p1) { return s[0] + "-" + p1.toLowerCase() }).decapitalize();
};

String.prototype.underscore = function () {
	return this.replace(/.([A-Z])/g, function (s, p1) { return s[0] + "_" + p1.toLowerCase() }).decapitalize();
};

/**
 * Tests if this string starts with the specified prefix.
 *
 * @param {String} prefix The prefix.
 * @return {boolean} true if this string starts with the specified prefix; false otherwise.
 */
String.prototype.startsWith = function startsWith(prefix) {
	return this.indexOf(prefix) === 0;
};

/**
 * Tests if this string ends with the specified suffix.
 *
 * @param {String} suffix The suffix.
 * @return {boolean} true if this string ends with the specified suffix; false otherwise.
 */
String.prototype.endsWith = function endsWith(suffix) {
	var t = String(suffix);
	var index = this.lastIndexOf(t);
	return index >= 0 && index === this.length - t.length;
};