<template>
<center>
  <v-container 
    class="ma-14"
     >
    <v-row 
    no-gutters
    style="height: 300px;">
      <v-col order="last">  
        <v-card
          class="pa-14"
          outlined
          tile
          no-borders          
        >

              <center><lable class="input-label"><h3>For Students  </h3></lable></center>

                        

                       
                     <center><h4>
              <v-btn class="mx-2" rounded dark color="#23b676">
               Kerberos Login
              </v-btn></h4>
            </center>
 

            

                         <br/>
                        <center><lable class="input-label"><h3>For Admins  </h3></lable></center>


                               <center><h4>
              <v-btn class="mx-2" rounded dark color="#23b676">
               Gmail Login
              </v-btn></h4>
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
    data: () => ({
      alignments: [
        'center',
      ],
    }),
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
v-btn {
  color: #23b676;
}

h2 {
  margin: 110px 0 0;
  text-indent: 10px 0 0;
  padding-left: 180px;
}

</style>
