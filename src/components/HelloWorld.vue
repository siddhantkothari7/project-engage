<template>

    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                     

    
 
                     
                     <v-img :src="require('../assets/backgroundd.png')" > 
                     
                      <v-img :src="require('./assets/spark-logo.png')" height="300px" width="300px" ></v-img> <h1><center>Welcome to SPARK!</center></h1>
                     
                     
                     
                     </v-img>
                    
                 
                     
                    
         
                     <form action="">
                        <div class="form-group">
                            <lable class="input-label"><h3><center>For Students      </center></h3></lable>
                        </div>

                       
                      <div class="text-center">
              <v-btn class="ma-2" outlined rounded color="black">
                Kerberos Login
              </v-btn>
            </div>
 

            

                        <template>
            
                        </template>
                        <div class="form-group">
                            <lable class="input-label"> <h3><center>For Admins      </center></h3> </lable>
                         </div>

                         <div class="text-center">
                         <v-btn class="" rounded outlined color="black"> Gmail Login </v-btn>
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
  color: #415a4f;
}

</style>

