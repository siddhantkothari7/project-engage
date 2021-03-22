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
                     <h2><v-img :src="require('../assets/sparky.png')" height="300px" width="300px" border-radius="100px"></v-img> <h1>Welcome to SPARK!</h1></h2>
                    

                    
                     <form action="">

                       
                        <test>

                   
                        <div align="right" style="margin-top:-175px; margin-right:230px;" width="200px">
                            <lable class="input-label"><h3>For Students  </h3></lable>
                        </div>

                        

                       
                      <div align="right" style="margin-top:0px; margin-right:200px;"><h4>
              <v-btn class="ma-2" outlined rounded color="black">
                Kerberos Login
              </v-btn></h4>
            </div>
 

            

                        <template>
            
                        </template>
                        <div align="right" style="margin-top:0px; margin-right:230px;">
                            <lable class="input-label"> <h3>For Admins      </h3> </lable>
                         </div>

                         <div align="right" style="margin-top:0px; margin-right:214px;">
                        <h4>
                         <v-btn class="" rounded outlined color="black" > Gmail Login </v-btn> </h4>
                         </div>
                         
                        
 
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                        </test>
                    </form>
                     
                     
                     </v-img>
                    
                 
                     
                    
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
test {
  position: relative;

  margin-top: 15px auto;
  padding-top: 100px  0 0;

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

h2 {
  margin: 110px 0 0;
  text-indent: 10px 0 0;
  padding-left: 180px;
}

</style>
