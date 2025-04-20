exports.home = (req, res) => {
  res.render('home', {
    title: 'Home',
    message: 'Welcome to the Home Page!'
  });
}

exports.contact = (req, res) => {
  res.render('contact', {
    title: 'Contact Me',
    message: 'Feel free to reach out!'
  });
}

exports.education = (req, res) => {
  res.render('education', {
    title: 'Education',
    message: 'Here is my educational background.'
  });
}

exports.projects = (req, res) => { 
  res.render('projects', {
    title: 'Projects',
    message: 'Check out my projects!'
  });
}

exports.skills = (req, res) => {
  res.render('skills', {
    title: 'Skills',
    message: 'Here are my skills.'
  });
}