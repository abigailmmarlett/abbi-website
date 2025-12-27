# Abbi's Personal Website

A modern, interactive resume website featuring a visually appealing work experience timeline.

## Features

- **Visual Timeline Resume**: An engaging timeline showing professional work history with dates, roles, companies, and descriptions
- **Interactive Design**: Smooth animations, hover effects, and gradient colors
- **Skills Showcase**: Animated skill bars displaying proficiency levels
- **Responsive Layout**: Mobile-friendly design that adapts to all screen sizes
- **Modern Styling**: Dark theme with purple/pink gradients and smooth transitions

## How to View

Simply open `index.html` in any modern web browser:

1. Clone this repository
2. Open `index.html` in your browser
3. Explore the interactive resume!

Alternatively, you can serve it with any web server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8080` in your browser.

## Customization

To customize the content with your own information:

1. **Work Experience**: Edit the timeline items in `index.html` (look for `timeline-item` sections)
2. **Skills**: Update the skills section in `index.html` and adjust percentage values in the `style` attributes
3. **Colors**: Modify CSS variables in `styles.css` (`:root` section) to change the color scheme
4. **Contact Info**: Update the contact section with your email, phone, and location

## Structure

- `index.html` - Main HTML structure with content
- `styles.css` - All styling including animations and responsive design

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

All rights reserved.