// import React from 'react';
// import './App.css';
// import logo from './logo.jpeg'; 
// function App() {
//   return (
//     <div className="app-container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={logo} alt="D Y Patil College Logo" className="logo-img" />
//           <span>D Y Patil College of Engineering and Technology,Kolhapur.</span>
//         </div>
//         <div className="navbar-links">
//           <a href="#home" className="nav-link">Home</a>
//           <a href="#courses" className="nav-link">Courses</a>
//           <a href="#facilities" className="nav-link">Facilities</a>
//           <a href="#events" className="nav-link">Events</a>
//           <a href="#contact" className="nav-link">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <h1>Welcome to D Y Patil College of Engineering and Technology</h1>
//         <p>Kasaba Bawada, Kolhapur — Empowering innovation and excellence in engineering education.</p>
//         <button className="btn-primary">Explore Courses</button>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="section">
//         <h2>Our Engineering Programs</h2>
//         <div className="course-grid">
//           <div className="course-card">
//             <h3>Computer Science & Engineering</h3>
//             <p>Cutting-edge curriculum in software development, AI, and cybersecurity.</p>
//           </div>
//           <div className="course-card">
//             <h3>Computer Science & Engineering - AIML</h3>
//             <p>Focuses on developing intelligent systems that can learn and make decisions like humans</p>
//           </div>
//           <div className="course-card">
//             <h3>Computer Science & Engineering - Data Science</h3>
//             <p>Develop intelligent systems that can learn from data and solve real-world problems</p>
//           </div>
//           <div className="course-card">
//             <h3>Mechanical Engineering</h3>
//             <p>Focus on design, manufacturing, and thermal engineering.</p>
//           </div>
//           <div className="course-card">
//             <h3>Chemical Engineering</h3>
//             <p>Focus on designing, developing, and optimizing processes for large-scale chemical production</p>
//           </div>
//           <div className="course-card">
//             <h3>Civil Engineering</h3>
//             <p>Infrastructure planning, construction management, and sustainability.</p>
//           </div>
//           <div className="course-card">
//             <h3>Electronics & Telecommunication</h3>
//             <p>Modern electronics, communication systems, and embedded technologies.</p>
//           </div>
//         </div>
//       </section>

//       {/* Facilities Section */}
//       <section id="facilities" className="section facilities-section">
//         <h2>Campus Facilities</h2>
//         <ul className="facilities-list">
//           <li>✔ Advanced Laboratories equipped with latest tools</li>
//           <li>✔ Centralized Library with vast digital and print resources</li>
//           <li>✔ Sports complex with indoor and outdoor facilities</li>
//           <li>✔ Suitable parking system and management</li>
//           <li>✔ Wi-Fi enabled campus for seamless connectivity</li>
//           <li>✔ Dedicated placement cell for career development</li>
//         </ul>
//       </section>

//       {/* Events Section */}
//       <section id="events" className="section">
//         <h2>Clubs</h2>
//         <ul className="events-list">
//           <li><strong>Technical Clubs:</strong>Coding Club, MLSA Club, Lean Club, Garuda Club</li>
//           <li><strong>Non-Technical Clubs:</strong> Dancing Club, Art & Craft Club, Guittar Club, Adventure Club, Painting Club</li>
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section contact-section">
//         <h2>Contact Us</h2>
//         <p>D Y Patil College of Engineering and Technology</p>
//         <p>Kasaba Bawada, Kolhapur, Maharashtra - 416012</p>
//         <p>Email: info@dypatilcetkolhapur.edu.in | Phone: +91-231-2650222</p>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         &copy; 2025 D Y Patil College of Engineering and Technology, Kolhapur. All rights reserved.
//       </footer>
//     </div>
//   );
// }
// export default App;
//2nd time
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Container, Box, Link } from "@mui/material";
// import logo from "./logo.jpeg";
// import dypcet from "./dypcet.jpg";

// function App() {
//   return (
//     <Box sx={{ bgcolor: "#fff", color: "#333", minHeight: "100vh" }}>
//       {/* Navigation Bar */}
//       <AppBar position="sticky" sx={{ bgcolor: "#004aad", mb: 4 }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <img
//               src={logo}
//               alt="D Y Patil College Logo"
//               style={{ width: 40, height: 40, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
//             />
//             <Typography variant="h6" sx={{ fontWeight: 700 }}>
//               D Y Patil College of Engineering and Technology, Kolhapur.
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", gap: 2 }}>
//             {["Home", "Courses", "Facilities", "Clubs", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 underline="none"
//                 color="inherit"
//                 sx={{ fontWeight: 600, fontSize: "1rem", "&:hover": { textDecoration: "underline" } }}
//               >
//                 {item}
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Container
//         maxWidth="md"
//         sx={{
//           textAlign: "center",
//           bgcolor: "#cce5ff",
//           py: 10,
//           borderRadius: 2,
//           mb: 6,
//           px: 3,
//         }}
//         id="home"
//       >
//         <img
//               src={dypcet}
//               alt="D Y Patil College Image"
//               style={{ width: 600, height: 300, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
//             />
//         <Typography variant="h3" component="h1" gutterBottom sx={{ color: "#004aad", fontWeight: "bold" }}>
//           Welcome to D Y Patil College of Engineering and Technology
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
//           Kasaba Bawada, Kolhapur — Empowering innovation and excellence in engineering education.
//         </Typography>
//         <Button variant="contained" size="large" sx={{ bgcolor: "#004aad", "&:hover": { bgcolor: "#003080" } }}>
//           Explore Courses
//         </Button>
//       </Container>

//       {/* Courses Section */}
//       <Container maxWidth="lg" sx={{ textAlign: "center", mb: 8 }} id="courses">
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#004aad", fontWeight: "bold" }}>
//           Our Engineering Programs
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: 3,
//           }}
//         >
//           {[
//             {
//               title: "Computer Science & Engineering",
//               desc: "Cutting-edge curriculum in software development, AI, and cybersecurity.",
//             },
//             {
//               title: "Computer Science & Engineering - AIML",
//               desc: "Focuses on developing intelligent systems that can learn and make decisions like humans",
//             },
//             {
//               title: "Computer Science & Engineering - Data Science",
//               desc: "Develop intelligent systems that can learn from data and solve real-world problems",
//             },
//             { title: "Mechanical Engineering", desc: "Focus on design, manufacturing, and thermal engineering." },
//             {
//               title: "Chemical Engineering",
//               desc: "Focus on designing, developing, and optimizing processes for large-scale chemical production",
//             },
//             { title: "Civil Engineering", desc: "Infrastructure planning, construction management, and sustainability." },
//             {
//               title: "Electronics & Telecommunication",
//               desc: "Modern electronics, communication systems, and embedded technologies.",
//             },
//           ].map(({ title, desc }) => (
//             <Box
//               key={title}
//               sx={{
//                 width: 250,
//                 bgcolor: "background.paper",
//                 p: 3,
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 transition: "box-shadow 0.3s ease",
//                 "&:hover": { boxShadow: 6 },
//                 textAlign: "left",
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 1, fontWeight: "600", color: "#004aad" }}>
//                 {title}
//               </Typography>
//               <Typography variant="body2">{desc}</Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>

//       {/* Facilities Section */}
//       <Box
//         component="section"
//         id="facilities"
//         sx={{
//           bgcolor: "#f7f7f7",
//           py: 6,
//           textAlign: "center",
//           px: 2,
//         }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#004aad", fontWeight: "bold" }}>
//           Campus Facilities
//         </Typography>
//         <Box
//           component="ul"
//           sx={{
//             maxWidth: 600,
//             mx: "auto",
//             textAlign: "left",
//             listStyle: "none",
//             p: 0,
//             fontSize: "1.1rem",
//           }}
//         >
//           {[
//             "Advanced Laboratories equipped with latest tools",
//             "Centralized Library with vast digital and print resources",
//             "Sports complex with indoor and outdoor facilities",
//             "Suitable parking system and management",
//             "Wi-Fi enabled campus for seamless connectivity",
//             "Dedicated placement cell for career development",
//           ].map((item) => (
//             <li key={item} style={{ marginBottom: "0.75rem" }}>
//               ✔ {item}
//             </li>
//           ))}
//         </Box>
//       </Box>

//       {/* Events Section */}
//       <Box
//         component="section"
//         id="events"
//         sx={{ py: 6, textAlign: "center", px: 2 }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#004aad", fontWeight: "bold" }}>
//           Clubs
//         </Typography>
//         <Box
//           component="ul"
//           sx={{
//             maxWidth: 600,
//             mx: "auto",
//             textAlign: "left",
//             fontSize: "1.1rem",
//             p: 0,
//           }}
//         >
//           <li style={{ marginBottom: "0.75rem" }}>
//             <strong>Technical Clubs:</strong> Coding Club, MLSA Club, Lean Club, Garuda Club
//           </li>
//           <li style={{ marginBottom: "0.75rem" }}>
//             <strong>Non-Technical Clubs:</strong> Dancing Club, Art & Craft Club, Guittar Club, Adventure Club, Painting Club
//           </li>
//         </Box>
//       </Box>

//       {/* Contact Section */}
//       <Box
//         component="section"
//         id="contact"
//         sx={{
//           bgcolor: "#004aad",
//           color: "white",
//           py: 6,
//           px: 2,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
//           Contact Us
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
//           D Y Patil College of Engineering and Technology
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
//           Kasaba Bawada, Kolhapur, Maharashtra - 416012
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem" }}>
//           Email: info@dypatilcetkolhapur.edu.in | Phone: +91-231-2650222
//         </Typography>
//       </Box>

//       {/* Footer */}
//       <Box
//         component="footer"
//         sx={{
//           bgcolor: "#003080",
//           color: "#ccc",
//           py: 2,
//           textAlign: "center",
//         }}
//       >
//         &copy; 2025 D Y Patil College of Engineering and Technology, Kolhapur. All rights reserved.
//       </Box>
//     </Box>
//   );
// }

// export default App;


//3rd time
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Box,
//   Link,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Badge,
//   CircularProgress,
//   Drawer,
//   Tabs,
//   Tab,
//   Tooltip,
//   ButtonGroup,
//   Chip,
//   Divider,
//   Fab,
//   Breadcrumbs,
//   Menu,
//   MenuItem,
//   IconButton,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import AddIcon from "@mui/icons-material/Add";
// import InfoIcon from "@mui/icons-material/Info";


// import logo from "./logo.jpeg";
// import dypcet from "./dypcet.jpg";

// function App() {
//   // State for Dialog and Snackbar
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);


//   const courses = [
//     {
//       title: "Computer Science & Engineering",
//       desc: "Cutting-edge curriculum in software development, AI, and cybersecurity.",
//     },
//     {
//       title: "Computer Science & Engineering - AIML",
//       desc: "Focuses on developing intelligent systems that can learn and make decisions like humans",
//     },
//     {
//       title: "Computer Science & Engineering - Data Science",
//       desc: "Develop intelligent systems that can learn from data and solve real-world problems",
//     },
//     { title: "Mechanical Engineering", desc: "Focus on design, manufacturing, and thermal engineering." },
//     {
//       title: "Chemical Engineering",
//       desc: "Focus on designing, developing, and optimizing processes for large-scale chemical production",
//     },
//     { title: "Civil Engineering", desc: "Infrastructure planning, construction management, and sustainability." },
//     {
//       title: "Electronics & Telecommunication",
//       desc: "Modern electronics, communication systems, and embedded technologies.",
//     },
//   ];

//   // Open dialog with course details
//   const handleOpenDialog = (course) => {
//     setSelectedCourse(course);
//     setOpenDialog(true);
//   };

//   // Close dialog
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   // Handle Snackbar open when "Explore Courses" is clicked
//   const handleExploreClick = () => {
//     setOpenSnackbar(true);
//   };

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   const toggleDrawer = (open) => () => {
//    setDrawerOpen(open);
//   };

//   const handleTabChange = (event, newValue) => {
//   setTabValue(newValue);
//   };

//   const handleMenuOpen = (event) => {
//   setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//   setMenuAnchorEl(null);
//   };


//   return (
//     <Box sx={{ bgcolor: "#fff", color: "#333", minHeight: "100vh" }}>
//       {/* Navigation Bar */}
//       <AppBar position="sticky" sx={{ bgcolor: "primary.main", mb: 4 }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <img
//               src={logo}
//               alt="D Y Patil College Logo"
//               style={{ width: 40, height: 40, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
//             />
//             <Typography variant="h6" sx={{ fontWeight: 700 }}>
//               D Y Patil College of Engineering and Technology, Kolhapur.
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", gap: 2 }}>
//             {["Home", "Courses", "Facilities", "Clubs", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 underline="none"
//                 color="inherit"
//                 sx={{ fontWeight: 600, fontSize: "1rem", "&:hover": { textDecoration: "underline" } }}
//               >
//                 {item}
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Container
//         maxWidth="md"
//         sx={{
//           textAlign: "center",
//           bgcolor: "#cce5ff",
//           py: 10,
//           borderRadius: 2,
//           mb: 6,
//           px: 3,
//         }}
//         id="home"
//       >
//         <img
//           src={dypcet}
//           alt="D Y Patil College Image"
//           style={{ width: 600, height: 300, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
//         />
//         <Typography variant="h3" component="h1" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
//           Welcome to D Y Patil College of Engineering and Technology
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
//           Kasaba Bawada, Kolhapur — Empowering innovation and excellence in engineering education.
//         </Typography>
//         <Button variant="contained" size="large" sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "secondary.main" } }} onClick={handleExploreClick}>
//           Explore Courses
//         </Button>
//       </Container>

//       {/* Courses Section */}
//       <Container maxWidth="lg" sx={{ textAlign: "center", mb: 8 }} id="courses">
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
//           Our Engineering Programs
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {courses.map(({ title, desc }) => (
//             <Grid item key={title} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{
//                   cursor: "pointer",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   "&:hover": { boxShadow: 6 },
//                 }}
//                 onClick={() => handleOpenDialog({ title, desc })}
//               >
//                 <CardContent>
//                   <Typography variant="h6" sx={{ mb: 1, fontWeight: "600", color: "primary.main" }}>
//                     {title}
//                   </Typography>
//                   <Typography variant="body2">{desc}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" onClick={() => handleOpenDialog({ title, desc })}>
//                     Learn More
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Facilities Section */}
//       <Box
//         component="section"
//         id="facilities"
//         sx={{
//           bgcolor: "#f7f7f7",
//           py: 6,
//           textAlign: "center",
//           px: 2,
//         }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
//           Campus Facilities
//         </Typography>
//         <Box
//           component="ul"
//           sx={{
//             maxWidth: 600,
//             mx: "auto",
//             textAlign: "left",
//             listStyle: "none",
//             p: 0,
//             fontSize: "1.1rem",
//           }}
//         >
//           {[
//             "Advanced Laboratories equipped with latest tools",
//             "Centralized Library with vast digital and print resources",
//             "Sports complex with indoor and outdoor facilities",
//             "Suitable parking system and management",
//             "Wi-Fi enabled campus for seamless connectivity",
//             "Dedicated placement cell for career development",
//           ].map((item) => (
//             <li key={item} style={{ marginBottom: "0.75rem" }}>
//               ✔ {item}
//             </li>
//           ))}
//         </Box>
//       </Box>

//       {/* Clubs Section */}
//       <Box
//         component="section"
//         id="events"
//         sx={{ py: 6, textAlign: "center", px: 2 }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
//           Clubs
//         </Typography>
//         <Box
//           component="ul"
//           sx={{
//             maxWidth: 600,
//             mx: "auto",
//             textAlign: "left",
//             fontSize: "1.1rem",
//             p: 0,
//           }}
//         >
//           <li style={{ marginBottom: "0.75rem" }}>
//             <strong>Technical Clubs:</strong> Coding Club, MLSA Club, Lean Club, Garuda Club
//           </li>
//           <li style={{ marginBottom: "0.75rem" }}>
//             <strong>Non-Technical Clubs:</strong> Dancing Club, Art & Craft Club, Guitar Club, Adventure Club, Painting Club
//           </li>
//         </Box>
//       </Box>

//       {/* Contact Section */}
//       <Box
//         component="section"
//         id="contact"
//         sx={{
//           bgcolor: "primary.main",
//           color: "white",
//           py: 6,
//           px: 2,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
//           Contact Us
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
//           D Y Patil College of Engineering and Technology
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
//           Kasaba Bawada, Kolhapur, Maharashtra - 416012
//         </Typography>
//         <Typography sx={{ fontSize: "1.1rem" }}>
//           Email: info@dypatilcetkolhapur.edu.in | Phone: +91-231-2650222
//         </Typography>
//       </Box>

//       {/* Footer */}
//       <Box
//         component="footer"
//         sx={{
//           bgcolor: "secondary.main",
//           color: "#ccc",
//           py: 2,
//           textAlign: "center",
//         }}
//       >
//         &copy; 2025 D Y Patil College of Engineering and Technology, Kolhapur. All rights reserved.
//       </Box>
//       {/* MUI Components Demo Section */}
//       <Container maxWidth="md" sx={{ my: 6, textAlign: "center" }}>
//        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "primary.main" }}>
//        MUI Components Demo
//        </Typography>

//       {/* Icons */}
//       <Box sx={{ mb: 3 }}>
//        <Typography variant="h6">Icons</Typography>
//        <HomeIcon sx={{ fontSize: 40, mx: 1 }} color="primary" />
//        <MailIcon sx={{ fontSize: 40, mx: 1 }} color="secondary" />
//        <InboxIcon sx={{ fontSize: 40, mx: 1 }} color="action" />
//        </Box>

//       {/* Table */}
//      <Box sx={{ mb: 3 }}>
//       <Typography variant="h6" gutterBottom>
//       Simple Table
//       </Typography>
//      <TableContainer component={Paper} sx={{ maxWidth: 500, mx: "auto" }}>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Role</TableCell>
//             <TableCell align="right">Age</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {[
//             { name: "Alice", role: "Developer", age: 29 },
//             { name: "Bob", role: "Designer", age: 35 },
//             { name: "Charlie", role: "Manager", age: 42 },
//           ].map((row) => (
//             <TableRow key={row.name}>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.role}</TableCell>
//               <TableCell align="right">{row.age}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//        </Table>
//        </TableContainer>
//        </Box>

//        {/* Avatar & Badge */}
//        <Box sx={{ mb: 3, display: "flex", justifyContent: "center", gap: 4, alignItems: "center" }}>
//         <Badge badgeContent={4} color="error">
//           <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=3" sx={{ width: 56, height: 56 }} />
//        </Badge>
//        <Avatar sx={{ bgcolor: "secondary.main" }}>JD</Avatar>
//        </Box>

//        {/* CircularProgress */}
//        <Box sx={{ mb: 3 }}>
//         <Typography variant="h6">Loading Indicator</Typography>
//         <CircularProgress color="primary" />
//        </Box>

//        {/* Drawer */}
//        <Box sx={{ mb: 3 }}>
//        <Button variant="contained" onClick={toggleDrawer(true)}>
//          Open Drawer
//        </Button>
//        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//        <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)}>
//         <Typography variant="h6" gutterBottom>
//           Drawer Content
//         </Typography>
//         <Button fullWidth sx={{ mb: 1 }}>
//           Link 1
//         </Button>
//         <Button fullWidth sx={{ mb: 1 }}>
//           Link 2
//         </Button>
//         <Button fullWidth>Link 3</Button>
//         </Box>
//        </Drawer>
//        </Box>

//        {/* Tabs */}
//        <Box sx={{ width: "100%", mb: 3 }}>
//         <Tabs value={tabValue} onChange={handleTabChange} centered>
//          <Tab label="Item One" />
//          <Tab label="Item Two" />
//          <Tab label="Item Three" />
//         </Tabs>
//        <Box sx={{ p: 2, border: "1px solid #ddd" }}>
//         {tabValue === 0 && <Typography>Content for Item One</Typography>}
//         {tabValue === 1 && <Typography>Content for Item Two</Typography>}
//         {tabValue === 2 && <Typography>Content for Item Three</Typography>}
//        </Box>
//        </Box>

//       {/* Tooltip */}
//       <Box sx={{ mb: 3 }}>
//        <Tooltip title="Info Button Tooltip" arrow>
//         <Button variant="outlined" startIcon={<InfoIcon />}>
//         Hover me
//         </Button>
//        </Tooltip>
//        </Box>

//       {/* ButtonGroup */}
//       <Box sx={{ mb: 3 }}>
//        <ButtonGroup variant="contained" aria-label="outlined primary button group">
//        <Button>Left</Button>
//        <Button>Center</Button>
//        <Button>Right</Button>
//        </ButtonGroup>
//       </Box>

//       {/* Chips */}
//       <Box sx={{ mb: 3, display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
//        <Chip label="Default" />
//        <Chip label="Primary" color="primary" />
//        <Chip label="Success" color="success" />
//        <Chip label="Warning" color="warning" />
//        <Chip label="Clickable" onClick={() => alert("Clicked!")} />
//        <Chip label="Deletable" onDelete={() => alert("Deleted!")} />
//       </Box>

//      {/* Divider */}
//      <Divider sx={{ mb: 3 }} />

//      {/* Floating Action Button */}
//      <Box sx={{ mb: 3 }}>
//       <Fab color="primary" aria-label="add">
//       <AddIcon />
//       </Fab>
//      </Box>

//      {/* Breadcrumbs */}
//       <Box sx={{ mb: 3 }}>
//       <Breadcrumbs aria-label="breadcrumb">
//       <Link underline="hover" color="inherit" href="#">
//         Home
//       </Link>
//       <Link underline="hover" color="inherit" href="#">
//         Catalog
//       </Link>
//       <Typography color="text.primary">Accessories</Typography>
//       </Breadcrumbs>
//       </Box>

//      {/* Menu */}
//      <Box sx={{ mb: 3 }}>
//      <Button variant="contained" onClick={handleMenuOpen}>
//       Open Menu
//       </Button>
//      <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//       <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//      </Menu>
//      </Box>
//     </Container>

//       {/* Course Details Dialog */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>{selectedCourse?.title}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>{selectedCourse?.desc}</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar Notification */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: "100%" }}>
//           Explore the courses by clicking on any card to learn more!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

// export default App;


import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Link,
  Grid,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Badge,
  CircularProgress,
  Drawer,
  Tabs,
  Tab,
  Tooltip,
  ButtonGroup,
  Chip,
  Divider,
  Fab,
  Breadcrumbs,
  Menu,
  MenuItem,
  IconButton,
  Pagination,
  Rating,
//  Skeleton,
  SpeedDial,
  SpeedDialAction,
  Popover,
  LinearProgress,
} from "@mui/material";

import {
  Menu as MenuIcon,
//  Home as HomeIcon,
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
  Add as AddIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
  Event as EventIcon,
} from "@mui/icons-material";

import logo from "./logo.jpeg";
import dypcet from "./dypcet.jpg";

function App() {
  // Dialog, Snackbar state as before
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Drawer & Menu state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [linearProgressValue, setLinearProgressValue] = useState(65);
   
  
  const speedDialActions = [
  { icon: <AddIcon />, name: "Add Student" },
  { icon: <ContactMailIcon />, name: "Contact Admin" },
  { icon: <EventIcon />, name: "Upcoming Events" },
  ];

  // Table (Faculty info)
  const faculty = [
    { name: "Prof. Radheeka Dhanal", department: "Computer Science and Engineering", designation: "HOD of CSE" },
    { name: "Prof. S. Patil", department: "Computer Science and Engineering", designation : "Professor" },
    { name: "Dr. A. Yadav", department: "Computer Science andEngineering", designation: "Professor" },
  ];

  const courses = [
    {
      title: "Computer Science & Engineering",
      desc: "Cutting-edge curriculum in software development, AI, and cybersecurity.",
    },
    {
      title: "Computer Science & Engineering - AIML",
      desc: "Focuses on developing intelligent systems that can learn and make decisions like humans",
    },
    {
      title: "Computer Science & Engineering - Data Science",
      desc: "Develop intelligent systems that can learn from data and solve real-world problems",
    },
    { title: "Mechanical Engineering", desc: "Focus on design, manufacturing, and thermal engineering." },
    {
      title: "Chemical Engineering",
      desc: "Focus on designing, developing, and optimizing processes for large-scale chemical production",
    },
    { title: "Civil Engineering", desc: "Infrastructure planning, construction management, and sustainability." },
    {
      title: "Electronics & Telecommunication",
      desc: "Modern electronics, communication systems, and embedded technologies.",
    },
  ];

  const handleOpenDialog = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleExploreClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  // Drawer toggle
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Tabs change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Menu open/close
  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handlePopoverOpen = (event) => setPopoverAnchor(event.currentTarget);
  const handlePopoverClose = () => setPopoverAnchor(null);
  const popoverOpen = Boolean(popoverAnchor);

  const handleSpeedDialOpen = () => setSpeedDialOpen(true);
  const handleSpeedDialClose = () => setSpeedDialOpen(false);

  return (
    <Box sx={{ bgcolor: "#fff", color: "#333", minHeight: "100vh" }}>
      {/* Navigation Bar with Menu icon for Drawer */}
      <AppBar position="sticky" sx={{ bgcolor: "primary.main", mb: 4 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              alt="D Y Patil College Logo"
              style={{ width: 40, height: 40, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              D Y Patil College of Engineering and Technology, Kolhapur.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            {["Home", "Courses", "Facilities", "Clubs", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="none"
                color="inherit"
                sx={{ fontWeight: 600, fontSize: "1rem", "&:hover": { textDecoration: "underline" } }}
              >
                {item}
              </Link>
            ))}
            <Tooltip title="Contact Us">
              <IconButton color="inherit" href="#contact">
                <MailIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for navigation menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Navigation Menu
          </Typography>
          {["Home", "Courses", "Facilities", "Clubs", "Contact"].map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 1 }}
              onClick={toggleDrawer(false)}
              startIcon={<InboxIcon />}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          bgcolor: "#cce5ff",
          py: 10,
          borderRadius: 2,
          mb: 6,
          px: 3,
        }}
        id="home"
      >
        <img
          src={dypcet}
          alt="D Y Patil College Image"
          style={{ width: 600, height: 300, borderRadius: 5, backgroundColor: "#fff", padding: 3 }}
        />
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
          Welcome to D Y Patil College of Engineering and Technology
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Kasaba Bawada, Kolhapur — Empowering innovation and excellence in engineering education.
        </Typography>
        <Button variant="contained" size="large" sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "secondary.main" } }} onClick={handleExploreClick}>
          Explore Courses
        </Button>
        <Box sx={{ mt: 3 }}>
          {/* Circular Progress showing site loading or status */}
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Loading new updates...
          </Typography>
          <CircularProgress color="primary" />
        </Box>
      </Container>

      {/* Tabs for Quick Links */}
      <Container sx={{ mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="News" />
          <Tab label="Events" />
          <Tab label="Notices" />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {tabValue === 0 && (
            <Typography>
              Latest News: College secured top rankings in Maharashtra region for Engineering Excellence.
            </Typography>
          )}
          {tabValue === 1 && (
            <Typography>
              Upcoming Events: Annual Tech Fest on 25th Sept, Guest Lecture by industry leaders.
            </Typography>
          )}
          {tabValue === 2 && (
            <Typography>
              Notices: Mid Semester exams start from 18th September. Check your respective department schedules.
            </Typography>
          )}
        </Box>
      </Container>

      {/* Courses Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", mb: 8 }} id="courses">
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
          Our Engineering Programs
        </Typography>

        {/* Chip component showing course categories */}
        <Box sx={{ mb: 3, display: "flex", justifyContent: "center", gap: 1 }}>
          <Chip label="Engineering" color="primary" />
          <Chip label="AI & ML" color="secondary" />
          <Chip label="Data Science" />
          <Chip label="Mechanical" />
          <Chip label="Civil" />
          <Chip label="Electronics" />
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {courses.map(({ title, desc }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": { boxShadow: 6 },
                }}
                onClick={() => handleOpenDialog({ title, desc })}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: "600", color: "primary.main" }}>
                    {title}
                  </Typography>
                  <Typography variant="body2">{desc}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpenDialog({ title, desc })} startIcon={<InfoIcon />}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>       

      {/* Faculty Table */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
          Meet Our Faculty
        </Typography>
        <TableContainer sx={{ maxHeight: 300, mb: 4 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faculty.map(({ name, department, designation }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>{designation}</TableCell>
                  <TableCell>
                    {/* Avatar with Badge (like online status) */}
                    <Badge color="success" variant="dot" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                      <Avatar alt={name} src={`https://i.pravatar.cc/150?u=${name}`} />
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Facilities Section */}
      <Box
        component="section"
        id="facilities"
        sx={{
          bgcolor: "#f7f7f7",
          py: 6,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
          Campus Facilities
        </Typography>
        <Box
          component="ul"
          sx={{
            maxWidth: 600,
            mx: "auto",
            textAlign: "left",
            listStyle: "none",
            p: 0,
            fontSize: "1.1rem",
          }}
        >
          {[
            "Advanced Laboratories equipped with latest tools",
            "Centralized Library with vast digital and print resources",
            "Sports complex with indoor and outdoor facilities",
            "Suitable parking system and management",
            "Wi-Fi enabled campus for seamless connectivity",
            "Dedicated placement cell for career development",
          ].map((item) => (
            <li key={item} style={{ marginBottom: "0.75rem" }}>
              ✔ {item}
            </li>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Skeleton - loading placeholder for faculty or courses
     <Container sx={{ textAlign: "center", mb: 6 }}>
     <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
      Loading Faculty Profiles...
     </Typography>
     <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}>
     <Skeleton variant="circular" width={80} height={80} />
     <Skeleton variant="text" width={120} />
     <Skeleton variant="rectangular" width={210} height={118} />
     </Box>
     </Container> */}


      {/* Clubs Section */}
      <Box
        component="section"
        id="clubs"
        sx={{ py: 6, textAlign: "center", px: 2 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
          Clubs
        </Typography>
        <Box
          component="ul"
          sx={{
            maxWidth: 600,
            mx: "auto",
            textAlign: "left",
            fontSize: "1.1rem",
            p: 0,
          }}
        >
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Technical Clubs:</strong> Coding Club, MLSA Club, Lean Club, Garuda Club
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Non-Technical Clubs:</strong> Dancing Club, Art & Craft Club, Guitar Club, Adventure Club, Painting Club
          </li>
        </Box>

        {/* Button Group to join clubs */}
        <ButtonGroup variant="outlined" aria-label="join clubs" sx={{ mt: 3 }}>
          <Button startIcon={<AddIcon />}>Join Technical</Button>
          <Button startIcon={<AddIcon />}>Join Non-Technical</Button>
        </ButtonGroup>
      </Box>

      {/* SpeedDial - quick admin actions */}
      <Container sx={{ position: "relative", height: 100, mb: 8 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main",textAlign: "center" }}>
       Quick Admin Actions
      </Typography>
      <SpeedDial
      ariaLabel="Quick admin actions"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<AddIcon />}
      onClose={handleSpeedDialClose}
      onOpen={handleSpeedDialOpen}
      open={speedDialOpen}
      >
     {speedDialActions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={() => {
          alert(`${action.name} clicked!`);
          handleSpeedDialClose();
        }}
      />
      ))}
     </SpeedDial>
     </Container> 

      {/* Contact Section with Breadcrumbs and Fab */}
      <Box
        component="section"
        id="contact"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 6,
          px: 2,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, color: "white" }}>
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Typography color="white">Contact</Typography>
        </Breadcrumbs>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
          D Y Patil College of Engineering and Technology
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", mb: 0.5 }}>
          Kasaba Bawada, Kolhapur, Maharashtra - 416012
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>
          Email: info@dypatilcetkolhapur.edu.in | Phone: +91-231-2650222
        </Typography>

        <Tooltip title="Send us a message" placement="left">
          <Fab
            color="secondary"
            aria-label="contact"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
          >
            <MailIcon />
          </Fab>
        </Tooltip>
      </Box>
        
      {/* Popover - show upcoming event info */}
      <Container sx={{ textAlign: "center", mb: 6 }}>
       <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
       Upcoming Event Details
       </Typography>
      <Button variant="outlined" onClick={handlePopoverOpen}>
        Show Event Info
      </Button>
      <Popover
       open={popoverOpen}
       anchorEl={popoverAnchor}
       onClose={handlePopoverClose}
       anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
       transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
      <Box sx={{ p: 2, maxWidth: 300 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        Annual Engineering Symposium 2025
      </Typography>
      <Typography variant="body2" mt={1}>
        Join us on September 25th for a day filled with guest lectures, workshops,
        and networking opportunities.
      </Typography>
      </Box>
      </Popover>
      </Container>

      {/* LinearProgress - application or course completion status */}
     <Container sx={{ mb: 4, px: 4 }}>
     <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
       Admission Application Progress
     </Typography>
     <LinearProgress
     variant="determinate"
     value={linearProgressValue}
     sx={{ height: 12, borderRadius: 6, mb: 1 }}
     />
     <Typography variant="body2" color="text.secondary">
     Your application is {linearProgressValue}% complete.
     </Typography>
     </Container>


     {/* Pagination - for course pages navigation */}
      <Container sx={{ mb: 6 }}>
      <Typography
       variant="h5"
       gutterBottom
       sx={{ fontWeight: "bold", color: "primary.main", textAlign: "center" }}
      >
      Browse Courses
      </Typography>
     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
     <Pagination
      count={7}
      color="primary"
      shape="rounded"
      showFirstButton
      showLastButton
      />
     </Box>
     </Container>

    
      {/* Rating - students rate a course */}
       <Container sx={{ textAlign: "center", mb: 6 }}>
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
           Rate Our Courses
         </Typography>
         <Rating
          name="course-rating"
          defaultValue={4}
          precision={0.5}
          size="large"
          sx={{ mt: 1 }}
         />
         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
           Please provide your feedback on our courses.
         </Typography>
       </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "secondary.main",
          color: "#ccc",
          py: 2,
          textAlign: "center",
        }}
      >
        &copy; 2025 D Y Patil College of Engineering and Technology, Kolhapur. All rights reserved.
      </Box>

      {/* Course Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedCourse?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedCourse?.desc}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: "100%" }}>
          Explore the courses by clicking on any card to learn more!
        </Alert>
      </Snackbar>

      {/* Simple Menu Example in Footer */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          variant="outlined"
          startIcon={<MenuIcon />}
        >
          Quick Links
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="#home">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#courses">Courses</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#facilities">Facilities</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#events">Clubs</MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#contact">Contact</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default App;
// Navigation Drawer toggled by Menu icon.

// Tabs for News, Events, Notices.

// Table displaying faculty info with Avatar + Badge (green dot).

// Chips categorizing courses.

// ButtonGroup for joining clubs.

// Tooltip on mail icon and floating action button (FAB) for contact.

// CircularProgress simulating loading.

// Breadcrumbs in contact section.

// Menu component with quick links.

// Styled sections with relevant content for your college.