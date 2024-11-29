
import Hijo from "@/components/Hijo.vue";
import { mount } from "@vue/test-utils";

test('El boton envia el mensaje',async ()=>{
  const wrapper =mount(Hijo);
  const button =wrapper.find('button');
  const input =wrapper.find('input');

  await input.setValue('Esta es la prueba');
  await button.trigger('click');

  expect(wrapper.emitted('nuevoMensaje')[0]).toEqual(['Esta es la prueba']);
})