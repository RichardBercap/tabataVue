<template>
  <div class="option">
        <div class="header-option">
            <p>{{option_name.name}}</p>
            <div class="config">
                <slot name="options"></slot>    
                
            </div>
        </div>
        <div class="body-option">
            <slot name="value"></slot>    
        </div>
  </div>
</template>

<script>

export default {
  name: 'Option',
  props: {
     option_name:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .option{
        border: solid;
        width: 25%;
        margin: 0 20px;

    }
    .header-option{
        display: flex;
        justify-content:space-between;
    }
    .header-option p{
        margin: 0;
        
    }
</style>
