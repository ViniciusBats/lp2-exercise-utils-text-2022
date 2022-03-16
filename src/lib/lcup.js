export function lcup (action, input) {
    if (action == "lowercase"){
        const output = input.toLowerCase();
        return output;

    } else {
        const output = input.toUpperCase();
        return output;
    }
    
}