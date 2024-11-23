import "./PostCar.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const PostCar = () => {
    const [formData, setFormData] = useState({
        brandname: "",
        name: "",
        color: "",
        type: "",
        transmission: "",
        modelyear: "",
        price: "",
        description: "",
        image: null, // Image file state
    });

    const [imagePreview, setImagePreview] = useState(null); // To store image preview

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (selectedOption, actionMeta) => {
        setFormData({
            ...formData,
            [actionMeta.name]: selectedOption.value,
        });
    };

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
        setImagePreview(URL.createObjectURL(file)); // Set the image preview
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create form data to include the image file
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch("http://localhost:8000/api/car", {
                method: 'POST',
                body: formDataToSend, // Send form data including image
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Success:", data);
            navigate("/dashboard"); // Redirect after success
        } catch (error) {
            console.log("Error creating car:", error.message);
        }
    };

    const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'black', label: 'Black' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
        { value: 'orange', label: 'Orange' },
        { value: 'pink', label: 'Pink' },
        { value: 'brown', label: 'Brown' },
        { value: 'gray', label: 'Gray' },
        { value: 'white', label: 'White' },
        { value: 'silver', label: 'Silver' },
        { value: 'gold', label: 'Gold' },
    ];

    const typeOptions = [
        { value: 'hybrid', label: 'Hybrid' },
        { value: 'electric', label: 'Electric' },
        { value: 'gasoline', label: 'Gasoline' },
        { value: 'diesel', label: 'Diesel' },
    ];

    const transmissionOptions = [
        { value: 'auto', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
    ];

    const brandOptions = [
        { value: 'ferrari', label: 'Ferrari' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'bmw', label: 'BMW' },
        { value: 'audi', label: 'Audi' },
        { value: 'mercedes', label: 'Mercedes' },
        { value: 'volkswagen', label: 'Volkswagen' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'chevrolet', label: 'Chevrolet' },
    ];

    return (
        <div className="center-form">
            <h1>New Car</h1>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicBrandName" className="select-container">
                    <Select
                        name="brandname"
                        options={brandOptions}
                        placeholder="Select brand name"
                        onChange={handleSelectChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicColor" className="select-container">
                    <Select
                        name="color"
                        options={colorOptions}
                        placeholder="Select color"
                        onChange={handleSelectChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicType" className="select-container">
                    <Select
                        name="type"
                        options={typeOptions}
                        placeholder="Select type"
                        onChange={handleSelectChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicTransmission" className="select-container">
                    <Select
                        name="transmission"
                        options={transmissionOptions}
                        placeholder="Select transmission type"
                        onChange={handleSelectChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicModelYear">
                    <Form.Control
                        type="number"
                        name="modelyear"
                        placeholder="Enter the Model Year"
                        value={formData.modelyear}
                        onChange={handleInputChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Control
                        type="text"
                        name="price"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required // Added required validation
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required // Added required validation
                    />
                </Form.Group>

                {/* Image upload */}
                <Form.Group controlId="formBasicImage">
                    <Form.Label>Upload Car Image</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleImageChange} accept="image/*" required /> {/* Added accept for image files */}
                </Form.Group>

                {/* Image preview */}
                {imagePreview && (
                    <div className="image-preview-container">
                        <img src={imagePreview} alt="Car Preview" className="image-preview" />
                    </div>
                )}

                <Button variant="primary" type="submit" className="w-100">Submit</Button>
            </Form>
        </div>
    );
};

export default PostCar;
