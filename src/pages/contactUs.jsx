import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet to create custom icons
import 'leaflet/dist/leaflet.css';
import NavBar from '../components/navbar';

const center = [22.6794908, 75.9561407];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    state: '',
    country: '',
    enquiryType: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp phone number (replace with the phone number you want to send data to)
    const phoneNumber = '919131651120';  // Use the recipient's WhatsApp number with country code

    // Create the message using the form data
    const message = `*Contact Form Submission*\n\nName: ${formData.name}\nCompany: ${formData.company}\nCity: ${formData.city}\nState: ${formData.state}\nCountry: ${formData.country}\nEnquiry Type: ${formData.enquiryType}\nEmail: ${formData.email}\nPhone: ${formData.number}\nMessage: ${formData.message}`;

    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to the WhatsApp link (opens WhatsApp with pre-filled message)
    window.open(whatsappLink, '_blank');

    // Optionally clear the form after submission
    setFormData({
      name: '',
      company: '',
      city: '',
      state: '',
      country: '',
      enquiryType: '',
      email: '',
      number: '',
      message: '',
    });
  };

  const customIcon = new L.Icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png',  // Replace with the actual URL of the image
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // position of the icon anchor
    popupAnchor: [0, -32], // position of the popup anchor
  });

  return (
    <>
      <NavBar />
      {/* Map Section */}
      <Box sx={{ width: '100%', height: '60vh', mb: 4 }}>
        <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            
          />
          {/* Custom marker with web image */}
          <Marker position={center} icon={customIcon}>
            <Popup>
              <a href="https://maps.app.goo.gl/FwjWjqTGvnjXcFMx5" target="_blank" rel="noreferrer">DSPL</a>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>

      {/* Form Section */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Know More About Dhameja Spices
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                * Indicates Mandatory Fields
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Enquiry Type</InputLabel>
                      <Select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        label="Enquiry Type"
                      >
                        <MenuItem value="general">General</MenuItem>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="support">Support</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'black', color: 'white' }}>
              <Typography variant="h5" gutterBottom>
                Get in touch
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    Address: 29/1, Saraswati Udhyog Nagar, Khasra No. 446/1/2, Gram Badiya Keema Nemawar Road, Indore - 452016 (M.P.)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    Customer Care No: +91 8871147664
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    Customer Care Email: dhamejaspicespvtltd@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUs;
