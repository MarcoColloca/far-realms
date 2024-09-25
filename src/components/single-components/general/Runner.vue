<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            x: 0,
            baseVelocity: -5,
            velocity: -2,
            maxSpeed: 40,
            dragSpeed: 3,
            prevTime: 0,
            runner: null,
            isDrag: false,
            pointer: {
                x: 0,
                y: 0
            },
            prevPointer: {
                x: 0,
                y: 0
            }
        }
    },


    async mounted() {
        await this.getRunner();
       
        // eventi aggiunti alla finestra per il dragging
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);

        requestAnimationFrame(this.tic);
    },

    beforeDestroy()
    {
        // rimozione eventi per il dragging
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
    },

    methods: {
        async getRunner() {
            // Controlla ogni 100ms se runner è popolato
            while (!this.$refs.runner) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Aspetta 100ms
            }
            this.runner = this.$refs.runner;
        },

        tic(time) {
            let dt = (time - this.prevTime) * 0.001;
            this.prevTime = time;

            this.velocity = gsap.utils.clamp(-this.maxSpeed, this.maxSpeed, this.velocity)

            this.x += this.velocity * dt;

            if(this.x > 0)
            {
                this.x -= 50
            }

            this.x = this.x % 50;

            if(!this.isDrag)
            {
                this.velocity = gsap.utils.interpolate(this.velocity,this.baseVelocity,dt * 3.5)
            }
            gsap.set(this.runner, { xPercent: this.x });

            requestAnimationFrame(this.tic);
        },

        onMouseDown(e)
        {
            
            
            this.isDrag = true;
            
            this.prevPointer.x = e.clientX // per il touch: event.touches[0].clientX
        },

        onMouseUp()
        {
            this.isDrag = false;
        },

        onMouseMove(e)
        {           
            if(this.isDrag)
            {
                this.pointer.x = e.clientX;
                this.velocity = (this.pointer.x - this.prevPointer.x) * this.dragSpeed;

                this.prevPointer.x = this.pointer.x;
            }
        }
    }
}
</script>





<template>
    <div class="runner" ref="runner" @mousedown="onMouseDown($event)">
        <slot></slot>
    </div>
</template>



<style lang="scss">
.runner {
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 12rem;
    line-height: 10rem;
    text-transform: uppercase;
    padding: 80px 0;
    font-weight: 900;
    user-select: none;
    cursor: grab;
    width: max-content;

    &:active {
        cursor: grabbing;
    }

    img {
        height: 10rem;
        pointer-events: none;
    }
}

.runner>* {
    margin-right: 3rem;
}
</style>