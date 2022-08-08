export default function timeConvert(time){
    const date = new Date(time);
    return date.toLocaleString();
}