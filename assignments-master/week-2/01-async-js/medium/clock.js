/* 
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function clockWork(){
    const ck = new Date();
    let hh = ck.getHours();
    const mm = ck.getMinutes().toString().padStart(2, "0");
    const ss = ck.getSeconds().toString().padStart(2, "0");
    const amPm = hh >= 12 ? "PM" : "AM";

    hh = (hh%12) || 12;
    console.log(`${hh.toString().padStart(2, "0")}:${mm}:${ss} ${amPm}`);
}
setInterval(clockWork, 1000);

