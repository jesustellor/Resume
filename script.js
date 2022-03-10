import everydayResume from "./components/data.js"

const resumeWebsite = everydayResume.map((resume) => {
    let mainArticle = document.createElement("article");
    mainArticle.classList.add("myResume");
    mainArticle.setAttribute("id", resume.id)

    mainArticle.innerHTML = `    
    <header>
    <nav class="navbar-inverse">
    <div class="container-fluid">
    <div class="navbar-header button-padding">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMenu">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <img id="logoStyle" class="img-responsive" src=${resume.logo}>
    </div> 
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="center-nav nav navbar-nav navbar-right">
        <li class="active"><a href="#about">About</a></li>
        <li><a href="#Portfolio-title">Certificates</a></li>
        <li><a href="tel:6194803078">Contact Me</a></li>
      </ul>
    </div>
   </div>
   </nav>
      </header>
  
      <div class="container-fluid">
      <div class="">
        <div class="col-xs-12 col-md-10">
          <h1>Jesus Tello</h1>
          <p>Welcome to my portfolio. My name is Jesus and I have over 6 years of experience in Information Technology,
            ranging from help desk troubleshooting to network support. Strong technical knowledge
            of computer hardware and software, including identifying and troubleshooting motherboard,
            CPU, hard disk system, and BIOS issues. Expertise in maintenance of network hardware and software,
            monitoring network to ensure network availability to all system users Skilled in network support
            and client server. Knowledgeable of business management practices with exceptional customer-focused approach.
            Committed to self-education to stay current with changing technologies. <a href="tel:6194803078" target="_system">Contact Me</a>
          </p>
        </div>
        <div class="col-md-2">
          <img class="img-responsive portfolio" src="pictures/codecamp.jpg" alt="Picture of Me">
        </div>
        <div class="">
          <h2 id="about">Technical Skills</h2>
        </div>
        <div class="col-md-4">
          <ul>
            <li>List Of Recent Certificates:</li>
            <li>Responsive Web Desing</li>
            <li>Programming Hub: Advanced HTML/HTML5</li>
            <li>Programming Hub: CSS/CSS3</li>
            <li>Programming Hub: Git</li>
            <li>Programming Hub: Blockchain</li>
            <li>Programming Hub: Java</li>
            <li>Programming Hub: Advanced JavaScript (ES6)</li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul>
            <li>Telephone Communication Systems</li>
            <li>Email Applications</li>
            <li>Hubs, Routers and Switches</li>
            <li>Telnet</li>
            <li>DNS</li>
            <li>FTP</li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul>
            <li>Wireless Technical Support</li>
            <li>PC Technical Support</li>
            <li>IP Addressing</li>
            <li>PC Hardware and Software Configuration</li>
            <li>Modem Configuration and Installation</li>
          </ul>
        </div>
        <div class="col-xs-12">
          <h3>Independent Driver Contractor</h3>
          <ul>
            <li>Drive privately owned vehicle to transport passengers</li>
            <li>Follow safety regulations/state laws governing vehicle operations and ensure that passengers follow safety
              regulations</li>
            <li>Communicate with dispatchers by telephone to pick up passengers at prearranged location</li>
            <li>Listen to and resolve customer's complaints regarding services.</li>
            <li>Perform routine vehicle maintenance such as regulating tire pressure, and adding gasoline, oil, and water
            </li>
            <li>Read maps and follow written and verbal geographic directions.</li>
          </ul>
    
          <h3>Computer Support</h3>
          <p>Freelance, San Diego, CA</p>
    
          <ul>
            <li>Answear inquiries regarding computer software or hardware operations to resolve problems</li>
            <li>Read technical manuals, conferred with user, conducted computer diagnostics to investigate and resolve
              problems</li>
            <li>Install and perfom minor repairs to hardware, software, or peripheral equipment, following desing or
              installation specifications.</li>
            <li>Inspect, operate, and test machinery or equipment, to diagnose machine malfunctions</li>
            <li>Install Operating Systems as needed, with correct drivers, for fully functional system use</li>
            <li>Ordered parts, supplies or equipment from catalogs or suppliers.</li>
            <li>Dismantled machine, equipment or devices to access or remove defective parts, using hand tools.</li>
          </ul>
        </div>
      </div>
      <hr class="star-primary col-xs-4 col-md-5">
      <div class="col-xs-4 col-md-2 mighty">
        <p>
          <bolder>&lt/&gt</bolder>
        </p>
      </div>
      <hr class="star-primary col-xs-4 col-md-5">
      <div class="col-xs-12 col-md-12">
        <h1 class="mighty" id="Portfolio-title">Certificates</h1>
        <div class="port-item col-xs-12 col-md-6">
          <img class="img-responsive portfolio-item" src="pictures/responsive-web-design.png" alt="">
        </div>
        <div class="port-item col-xs-12 col-md-6">
          <img class="img-responsive portfolio-item" src="pictures/HTMLadvanced.png" alt="">
        </div>
      </div>
      <div class="col-xs-12 col-md-12">
        <div class="port-item col-xs-12 col-md-6">
          <img class="img-responsive portfolio-item" src="pictures/CSScertificate.png" alt="">
        </div>
        <div class="port-item col-xs-12 col-md-6">
          <img class="img-responsive portfolio-item" src="pictures/Gitcertificate_1641598581386.png" alt="">
        </div>
      </div>
    
      <div class="cSize">
        <div id="carousel-example-generic" class="carousel slide col-md-10 cSize" data-ride="carousel">
          <!-- Indicators -->
    
    
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="pictures/responsive-web-design.png" alt="...">
              <div class="carousel-caption">
    
              </div>
            </div>
            <div class="item">
              <img src="pictures/HTMLadvanced.png" alt="...">
              <div class="carousel-caption">
    
              </div>
            </div>
            <div class="item">
              <img src="pictures/CSScertificate.png" alt="...">
              <div class="carousel-caption">
    
              </div>
            </div>
            <div class="item">
              <img src="pictures/Gitcertificate_1641598581386.png" alt="...">
              <div class="carousel-caption">
    
              </div>
            </div>
          </div>
    
          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr class="star-primary col-xs-4 col-md-5">
      <div class="col-xs-4 col-md-2 mighty">
        <p>
          <bolder>&lt/&gt</bolder>
        </p>
      </div>
      <hr class="star-primary col-xs-4 col-md-5">
    </div>
    </div>
    `

    
    ;

    return mainArticle;
});

const main = document.querySelector("body");

resumeWebsite.forEach((resume) => {
    main.append(resume);
  });