
export default function* Gen() {
    let currentvalue = 1;
    let add = 0;
    let result = 1;
    while (result) {
        // console.log("result=", result, " current value=", currentvalue, " add=", add);
        console.log("fibonnaci", result);
        yield result;
        result = currentvalue + add;
        add = currentvalue;
        currentvalue = result;
    }
}