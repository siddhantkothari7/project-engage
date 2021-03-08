<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                    <h1 class="display-3 font-weight-bold" >Welcome to SPARK!</h1>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <lable class="input-label"><h3>For Students      </h3></lable>
                        </div>

                        <div class="text-center">
                        <v-btn
                          rounded
                          color="primary"
                          dark
                          >
                        Kerberos Login
                        </v-btn>
                        </div>

                        
                        <template>
            
                        </template>
                        <div class="form-group">
                            <lable class="input-label"> <h3>For Admins      </h3> </lable>
                         </div>

                         <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      Gmail Login
    </v-btn>
  </div>
 
 
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


