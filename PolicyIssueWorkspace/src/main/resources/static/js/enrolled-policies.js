document.addEventListener('DOMContentLoaded', function() {
    const policiesList = document.getElementById('enrolledPoliciesList');
    const policies = JSON.parse(localStorage.getItem('policies') || '[]');

    if (policies.length === 0) {
        policiesList.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No policies enrolled yet.</p>
            </div>
        `;
        return;
    }

    policies.reverse().forEach(policy => {
        const policyCard = document.createElement('div');
        policyCard.className = 'col-md-6 col-lg-4';
        policyCard.innerHTML = `
            <div class="card policy-card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-primary mb-3">${policy.name}</h5>
                    <p class="card-text">
                        <strong>Vehicle Number:</strong> ${policy.vehicleNumber}<br>
                        <strong>Plan:</strong> ${policy.plan.charAt(0).toUpperCase() + policy.plan.slice(1)}<br>
                        <strong>Enrolled Date:</strong> ${policy.date}
                    </p>
                </div>
            </div>
        `;
        policiesList.appendChild(policyCard);
    });
});
