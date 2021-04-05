<template>
<center>
  <v-container 
    class="ma-14"
     >
    <v-row 
    no-gutters
    style="height: 300px;">
      <v-col order="last" no-gutters >  
        <v-card
          class="pa-14"
          outlined
          tile
          no-gutters 
         >
            
              <center><lable class="input-label"><h3 >For Students  </h3></lable></center>
               
               <center> <h4> 
               <router-link to="/KerberosLogin" tag="KerberosLogin" exact> <v-btn v-on:click="display" class="mx-2" rounded dark color="#23b676" to="/KerberosLogin">
             Kerberos Login 
              
              </v-btn><p v-if="show" > Kerberos Login: ..... </p></router-link></h4>  

            </center> 

 

            

                         <br/>
                        <center><lable class="input-label"><h3>For Admins </h3></lable></center>


                               <center><h4> 
               
                <router-link to="/GmailLogin" tag="GmailLogin" exact>
                <v-btn  v-on:click2="display2" class="mx-2" rounded dark color="#3CBD9A" > Gmail Login </v-btn>
                <p v-if="show2" >  Gmail Login: ..... </p></router-link>  </h4>
            </center>
                     
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
           
          <center><v-img
                :src="require('../assets/sparky.png')"
                height="200px"
                width="200px"
                border-radius="100px"
              ></v-img></center>
              <center><h1>Welcome to SPARK!</h1></center>
        </v-card>
      </v-col>      
    </v-row>
  </v-container> </center>
</template>
 

  
<script>
export default {
  name: "HelloWorld",
  data() { 

    return {
      show: false
    }
  },
  
  methods: {
    display(){  
      this.show =!this.show
    },

    display2(){
      this.show2 =! this.show2
    },
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
test {
  position: relative;

  margin-top: 15px auto;
  padding-top: 100px  0 0;

}

.v-card {
  display: block;
  border-color: white !important;
  margin-top: 15vh;
 

}

 
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
v-btn {
  color: #36bd90;
}

h2 {
  margin: 110px 0 0;
  text-indent: 10px 0 0;
  padding-left: 180px;
}

</style>
