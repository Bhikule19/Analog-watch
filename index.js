setInterval(() => {
    d = new Date();
    htime = d.getHours(); // getting curent hour and adding in the htime variable
    mtime = d.getMinutes(); // getting curent minute and adding in the mtime variable
    stime = d.getSeconds(); // getting curent second and adding in the stime variable
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    // for rotating the hands of the clock
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


