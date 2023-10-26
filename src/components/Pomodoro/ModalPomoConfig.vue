<template>
    <div class="w-500 bg-pink-300">
        <div class="modal-mask bg-black z-[99] index absolute w-[100%] h-[100%]" @click="close()">
            <transition name="modal" appear>
                <div class="modal-wrapper">
                    <div                         
                        :style="`width: 500px `"
                        class="modal-container pb-[10px] bg-[#EDF1F2] mx-auto mt-9 flex rounded-sm overflow-auto"
                        @click.stop=""
                    >
                        <slot name="modal-content"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
</script>

