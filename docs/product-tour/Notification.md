# Notifications

The Notifications section allows admins to manage communications and updates sent to users. Below are the features:

---

### Overview

<div style={{
  display: 'flex',
  flexDirection: ['column', 'row'],
  gap: '2rem',
  margin: '2rem 0'
}} class="discription">
  {/* Left side - Content */}
  <div style={{ flex: 1 }}>
    
    <p style={{margin: 0}}>In the “Send Notification” page users will see the following data fields.</p>
    
    <ol style={{ paddingLeft: "10px" }}>
      <li>
        <strong>Title:</strong> Here the user will enter the notification title, which can be a single word or multiple words.
      </li>
      <li>
        <strong>Message:</strong> This field will have the notification description or the main message of the notification
      </li>
      <li>
        <strong>Icon:</strong> This is where the admins will add an image or GIF for the notification icon.
      </li>
      <li>
        <strong>Notification type:</strong> Here the admin can select from two options, “In-app notification” which are notification that appear only in the application, and second “Push notification” which appear on the device notification panel as long as the user is logged in.
      </li>
      <li>
        <strong>Notification Duration:</strong> Here the user can set how long will the notification float on the user screen
      </li>
      <li>
        <strong>Send Options - Schedule to send:</strong> The admin can select a date and time for when he wants to schedule the notification for
      </li>
      <li>
        <strong>Send Immediately:</strong> Selecting this option sends the notification as soon as the submit button is clicked
      </li>
      <li>
        <strong>Receivers:</strong> The admin can select between individual or multiple users to send a notification to
      </li>
      <li>
        <strong>Send to all:</strong> Selecting this option sends the notification to every user, including the admin.
      </li>
    </ol>
  </div>

  {/* Right side - Image */}
  <div style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }}>
    <img 
      src="/img/Notification3.png" 
      alt="Notification Interface" 
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}
    />
  </div>
</div>

---

## End User Side

Users can enable notifications via their Edit Profile page or through the permission popup. Once enabled, users receive:

- Workout reminders.
- Missed workout alerts.
- Helpful tips and updates from the admin.

Users can view notifications by clicking the notification icon in the top-right corner.

---
