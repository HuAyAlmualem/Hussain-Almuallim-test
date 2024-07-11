<template>
<div class="container-fluid">
    <div class="row ">
        <div class="col-4 vh-100 git-bg ">
            <img class="position-relative top-50 start-50 translate-middle" src="@\assets\gittaxlogoText.svg" alt="">
        </div>

        <div class=" col-8   ">
            <div class="d-flex justify-content-end">
                <label> االلغة العربية</label>
            </div>
            <div class="container w-50 mt-5 pt-5 justify-content-center align-items-center">
                
                <form>
                    <p class="fs-5 fw-bold">Log In</p>
                <p class="fw-light">don't have an account ? <a href="#sign up">Sign Up</a> </p>
                    <label for="email" >Email Address</label><br>
                    <input type="password" ><br>
                    <label for="password">Password</label><br>
                    <input type="text"><br>
                </form>
                <a href="#" class="d-flex justify-content-end " >forget password?</a><br>
                <button @click="$router.push('Notification')" class="my-3 btn btn-warning" >Log in</button><br>
                <button class="btn btn-outline-secondary"><img width="27" height="27" src="@\assets\google.svg" alt="Google Logo"> Log in with google</button><br>
                <a href="#" class="noDecoration text-muted d-flex justify-content-center text-center"><img src="@\assets\arrow.svg" alt="arrow">Back to home page</a>
            </div>

        </div>
    </div>
</div>




</template>

<script>
export default {
  
}
</script>

<style scoped>
button, input{
    width: 100%;
}

.git-bg{
    background: linear-gradient(102.16deg, #303030 -78.58%, rgba(48, 48, 48, 0) 278.09%);
}

.noDecoration {
  text-decoration: none;
}

</style>
