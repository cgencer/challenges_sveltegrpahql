<script>
	import TailwindCss from '../lib/TailwindCSS.svelte';
	import Fa from 'svelte-fa'
	import { faFlag } from '@fortawesome/free-solid-svg-icons'
    import '../lib/style.css';
    import '../lib/theme2.css';
</script>

<TailwindCss/>

    <div class="form-body">
        <div class="website-logo">
            <a href="index.html">
                <div class="logo">
                    <img class="logo-size" src="images/logo-light.svg" alt="">
                </div>
            </a>
        </div>
        <div class="row">
            <div class="img-holder">
                <div class="bg"></div>
                <div class="info-holder">

                </div>
            </div>
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                        <div class="page-links">
                            <a href="login2.html" class="active">Login</a><a href="register2.html">Register</a>
                        </div>
                        <form>
                            <input class="form-control" type="text" name="username" placeholder="E-mail Address" required>
                            <input class="form-control" type="password" name="password" placeholder="Password" required>
                            <input type="checkbox" id="chk1"><label for="chk1">Remmeber me</label>
                            <div class="form-button">
                                <button id="submit" type="submit" class="ibtn">Login</button> <a href="forget2.html">Forget password?</a>
                            </div>
                        </form>
                        <div class="other-links">
                            <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>