function redirectToPage(event) {
    event.preventDefault();  
    const code = document.getElementById('codetype').value.trim().toLowerCase();  

    if (code === 'rcoai') {
        window.location.href = 'rcoai.html';
    } else if (code === 'rcoan') {
        window.location.href = 'rcoan.html';
    } else if (code === 'rloan') {
        window.location.href = 'rloan.html';
    } else if (code === 'rloai') {
        window.location.href = 'rloai.html';
    } else if (code === 'rluai') {
        window.location.href = 'rluai.html';
    } else if (code === 'rluan') {
        window.location.href = 'rluan.html';
    } else if (code === 'rcuan') {
        window.location.href = 'rcuan.html';
    } else if (code === 'rcuai') {
        window.location.href = 'rcuai.html';
    } else if (code === 'rcoei') {
        window.location.href = 'rcoei.html';
    } else if (code === 'rcoen') {
        window.location.href = 'rcoen.html';
    } else if (code === 'loen') {
        window.location.href = 'loen.html';
    } else if (code === 'loei') {
        window.location.href = 'loei.html';
    } else if (code === 'rluei') {
        window.location.href = 'rluei.html';
    } else if (code === 'rluen') {
        window.location.href = 'rluen.html';
    } else if (code === 'rcuen') {
        window.location.href = 'rcuen.html';
    } else if (code === 'cuei') {
        window.location.href = 'cuei.html';
    } else if (code === 'scoai') {
        window.location.href = 'scoai.html';
    } else if (code === 'scoan') {
        window.location.href = 'scoan.html';
    } else if (code === 'sloan') {
        window.location.href = 'sloan.html';
    } else if (code === 'sloai') {
        window.location.href = 'sloai.html';
    } else if (code === 'sluai') {
        window.location.href = 'sluai.html';
    } else if (code === 'sluan') {
        window.location.href = 'sluan.html';
    } else if (code === 'scuan') {
        window.location.href = 'scuan.html';
    } else if (code === 'scuai') {
        window.location.href = 'scuai.html';
    } else if (code === 'scoei') {
        window.location.href = 'scoei.html';
    } else if (code === 'scoen') {
        window.location.href = 'scoen.html';
    } else if (code === 'sloen') {
        window.location.href = 'sloen.html';
    } else if (code === 'sloei') {
        window.location.href = 'sloei.html';
    } else if (code === 'sluei') {
        window.location.href = 'sluei.html';
    } else if (code === 'sluen') {
        window.location.href = 'sluen.html';
    } else if (code === 'scuen') {
        window.location.href = 'scuen.html';
    } else if (code === 'scuei') {
        window.location.href = 'scuei.html';
    } else {
        alert("Invalid code. Please try again.");
    }
}
