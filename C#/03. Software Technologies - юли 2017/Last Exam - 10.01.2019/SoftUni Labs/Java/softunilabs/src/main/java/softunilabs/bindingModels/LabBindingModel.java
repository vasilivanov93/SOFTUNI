package softunilabs.bindingModels;

import javax.validation.constraints.NotNull;

public class LabBindingModel {
    private String name;

    private Integer capacity;

    private String status;

    public LabBindingModel() {
    }

    public LabBindingModel(String name, Integer capacity, String status) {
        this.name = name;
        this.capacity = capacity;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
