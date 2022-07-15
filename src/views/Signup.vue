<template>
  <div class="signup">
    <h1>Sign up</h1>
    <form @submit.prevent="signupHandler">
        <div class="row">
            <label for="first-name">First name</label>
            <input type="text" v-model="firstName" placeholder="first name">
        </div>
        <div class="row">
            <label for="last-name">Last name</label>
            <input type="text" v-model="lastName" placeholder="last name">
        </div>
        <div class="row">
            <label for="email">Email</label>
            <input type="email" v-model="email" placeholder="email">
        </div>
        <div class="row">
            <label for="create-password">Create Password</label>
            <input :type="showPassword ? 'text':'password'" v-model="createPassword" placeholder="create password">
        </div>
        <div class="row">
            <label for="re-enter-password">Re-Enter password</label>
            <input :type="showPassword ? 'text':'password'" v-model="reEnterPassword" placeholder="re-enter password">
        </div>
        <div class="row" v-if="createPassword || reEnterPassword">
            <input type="checkbox" v-model="showPassword">
            <label for="show-pss">Show password</label>
        </div>
        <div class="row">
            <label for="dob">Date of Birth</label>
            <input type="date" v-model="dob">
        </div>
        <div class="row">
            <label for="address" class="address">Address</label>
            <br>
            <label for="house-number">House no./flat no.</label>
            <input type="text" v-model="houseNo" placeholder="house no">
            <label for="locality">locality/area</label>
            <input type="text" v-model="locality" placeholder="locality">
            <label for="city">city</label>
            <input type="text" v-model="city" placeholder="city"> 
            <label for="state">State</label>
            <input type="text" v-model="state" placeholder="state">
            <label for="country">country</label>
            <input type="text" v-model="country" placeholder="country">
            <label for="pin-code">Pin</label>
            <input type="text" v-model.number="pin" placeholder="pin">
        </div>
        <div class="row">
            <label for="mobile">mobile number</label>
            <input type="text" v-model.number="mobile" placeholder="mobile no">
        </div>
        <div class="row">
            <label for="links">links</label>
            <input type="text" v-model="link" @keyup="linksHandler" placeholder="github,linkedIn,facebook,patreon">
        </div>
        <button class="btn">Create</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            firstName : '',
            lastName : '',
            email : '',
            createPassword : '',
            reEnterPassword : '',
            showPassword:false,
            dob : '',
            houseNo : '',
            locality : '',
            city : '',
            country : '',
            state : '',
            pin : null,
            mobile : null,
            link : '',
            links : []
        }
    },
    methods : {
        linksHandler(e){
            if(e.key === ','){
                this.links.push(this.link.split('').splice(0,this.link.length-1).join(''));
                this.link = '';
            }
        },
        signupHandler(){
            console.log(this.firstName,this.lastName,this.email,this.createPassword,this.reEnterPassword,this.dob,this.houseNo,this.locality,this.city,this.state,this.country,this.pin,this.mobile,this.links);
        }
    }
}
</script>

<style>
.signup{
    height: fit-content;
    width: 80vw;
    margin: 0 auto;
    padding: 2rem;
    font-size: 1.6rem;
}
.row{
    width: 100%;
    padding: 1rem;
}

label{
    margin-right:2rem;
}

input{
    padding: 1rem;
    width: 30%;
    margin: 1rem;
    transition: all .2s;
}

input:focus{
    transform: scale(1.02);
    outline-color: #7A86B6;
}

.btn{
    width:20%;
    padding:1rem 3rem;
    font-size: 1.6rem;
    background: #7A86B6 ;
    color: #fff;
    font-weight: 900;
    letter-spacing: .3rem;
    border:none;
    cursor: pointer;
    border-radius: 1rem;
    transition: all .2s;
}
.btn:hover{
    transform: scale(1.04);
    box-shadow: 0 0 1rem .2rem #999;
}
.btn:active{
    transform: scale(.87);
    box-shadow: none;
}
</style>