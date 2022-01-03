const name = "Gourav Khurana";
const age = 19;
const color = "Fair";
const hair = "Black";

// If we using the default statement with export then we can import with any name in any file.
// export default name;
// export default age;
// export default color;
// export default hair;

export default name;

// but when we are exporting without default then the name should be same in the import file also 
export {age, color, hair};