package com.insuremo.policy.model;

import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class Policy {
    @NotEmpty(message = "Name is required")
    @Size(min = 10, message = "Name must be at least 10 characters long")
    private String name;

    @NotEmpty(message = "Vehicle number is required")
    private String vehicleNumber;

    @NotEmpty(message = "Plan is required")
    private String plan;
}
