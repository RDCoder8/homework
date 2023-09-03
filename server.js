const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("portal", (filePath, options, callback) => {
  // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace('#url#', options.url)
    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "portal");

// app.get('/about-me', (req, res) => {
//   res.render('template', {
//     title: 'Hey',
//     message: 'Rick Ross!',
//     content: 'The most underated Rapper in the game',
//   });
// });

app.get('/0', (req, res) => {
  res.render('template2', {
    title: 'Hey',
    message: 'Rick Ross!',
    content: 'The most underated Rapper in the pizza game',
    url: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  })
})

app.get('/1', (req, res) => {
  res.render('template2', {
    title: 'Animal - Cow',
    message: 'Cow',
    content: 'Do we have beef?',
    url: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1404&q=80'
  })
})

app.get('/2', (req, res) => {
  res.render('template2', {
    title: 'Yo',
    message: 'Mickey Mouse!',
    content: 'The beloved disney mascot',
    url: 'https://images.unsplash.com/photo-1590926412950-0f1a5ce71660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1366&q=80'
  })
})

app.get('/3', (req, res) => {
  res.render('template2', {
    title: 'Stuart',
    message: 'The number one minion',
    content: 'Best minion on the team, Kevin wishes he was this cool',
    url: 'https://i.pinimg.com/564x/0d/ae/a6/0daea6fddfbb3035f361fec7161599c0.jpg'
  })
})

app.get('/4', (req, res) => {
  res.render('template2', {
    title: 'It\'sa me',
    message: 'Mario!',
    content: 'Savior of mushroom kingdom and top quality plumber',
    url: 'https://mario.nintendo.com/static/d783068682f98d6cfec666c747a27793/d6e64/mario.png'
  })
})

app.get("/", (req, res) => {
  res.render("template", {
    title: "We the Best",
    message: "Who!",
    content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
  });
});

app.get('/another-one', (req, res) => {
  res.render('template', {
    title: 'Running it back',
    message: 'We hittin em back-to-back',
    content:
      'Back again to get it one more time!',
  });
});

app.get('/even-better', (req, res) => {
  res.render('template', {
    title: 'New Upgrade',
    message: 'We out here leveling up!',
    content:
      'You can\'t stop me now. Can\'t stop, Won\'t stop.',
  });
});

app.get('/climbing', (req, res) => {
  res.render('template', {
    title: 'Getting Up',
    message: 'Started at the bottom!',
    content:
      'You can get out the mud, blood.',
  });
});

app.get('/stars', (req, res) => {
  res.render('template', {
    title: 'Shining',
    message: 'I\'m a shining star!',
    content:
      'Out here shining bright like a diamond!',
  });
});

app.listen(PORT, () => {
  console.log(`The police are listening on port ${PORT}`);
});
