import "./App.css";
import banner from './assets/banner.jpg';

function App() {
  return (
    <div>
    <header className="header">
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Another link</a></li>
    </ul>
  </div>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem ullam ratione vel voluptate maiores sapiente laborum, laboriosam eligendi quas quis sit tempore cumque repellendus tenetur iste, commodi accusantium? Quaerat!</h1>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem ullam ratione vel voluptate maiores sapiente laborum, laboriosam eligendi quas quis sit tempore cumque repellendus tenetur iste, commodi accusantium? Quaerat!</h1>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem ullam ratione vel voluptate maiores sapiente laborum, laboriosam eligendi quas quis sit tempore cumque repellendus tenetur iste, commodi accusantium? Quaerat!</h1>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem ullam ratione vel voluptate maiores sapiente laborum, laboriosam eligendi quas quis sit tempore cumque repellendus tenetur iste, commodi accusantium? Quaerat!</h1>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem ullam ratione vel voluptate maiores sapiente laborum, laboriosam eligendi quas quis sit tempore cumque repellendus tenetur iste, commodi accusantium? Quaerat!</h1>
    </div>
  );
}

export default App;
