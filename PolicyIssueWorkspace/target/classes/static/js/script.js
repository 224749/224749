document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('policyForm');
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('success')) {
        const policies = JSON.parse(localStorage.getItem('policies') || '[]');
        const formData = JSON.parse(sessionStorage.getItem('lastSubmittedPolicy') || '{}');
        
        if (Object.keys(formData).length > 0) {
            policies.push({
                id: Date.now(),
                ...formData
            });
            localStorage.setItem('policies', JSON.stringify(policies));
            sessionStorage.removeItem('lastSubmittedPolicy');
            
            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            
            // Clear URL parameter after showing modal
            window.history.replaceState({}, document.title, '/');
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: form.querySelector('#name').value,
            vehicleNumber: form.querySelector('#vehicleNumber').value,
            plan: form.querySelector('#plan').value,
            date: new Date().toLocaleDateString()
        };

        // Store form data temporarily
        sessionStorage.setItem('lastSubmittedPolicy', JSON.stringify(formData));
        form.submit();
    });
});
