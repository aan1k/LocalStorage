let count = 0;
document.querySelector('.btn').onclick = () => {
    count++;
    localStorage.setItem('b1', count);
}
