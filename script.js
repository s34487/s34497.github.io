```javascript
function showNotification(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    if (toast && toastMsg) {
        toastMsg.innerText = msg;
        toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        }, 3000);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    showNotification('ขอบคุณสำหรับข้อความ! จะติดต่อกลับโดยเร็วที่สุดนะครับ 🌸');
    e.target.reset();
}
```
