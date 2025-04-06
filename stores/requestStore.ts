import { defineStore } from 'pinia';
import { itemsForStepperServiceI, itemsServiceI, fetchStepper } from '~/utils/data';

export const useRequestStore = defineStore('request', {
  state: () => ({
    currentStep: 0,
    isSubmitting: false,
    errors: {
      service: '',
      objectType: '',
      address: '',
      fullName: '',
      phone: '',
      email: '',
      contactMethod: '',
      agreement: '',
    },
    formData: {
      service: 0,
      serviceType: 0,
      objectType: '',
      address: '',
      city: '',
      additionalInfo: '',
      fullName: '',
      phone: '',
      email: '',
      contactMethod: 'phone',
      agreement: false,
    },
    cityList: [] as string[],
  }),

  actions: {
    setCurrentStep(step: number) {
      this.currentStep = step;
    },

    nextStep() {
      if (this.validateStep()) {
        this.currentStep++;
      }
    },

    prevStep() {
      this.currentStep--;
    },

    setService(serviceId: number) {
      this.formData.service = serviceId;

      // Сбрасываем тип услуги при смене основной услуги
      this.formData.serviceType = 0;
    },

    setServiceType(typeId: number) {
      this.formData.serviceType = typeId;
    },

    setObjectType(type: string) {
      this.formData.objectType = type;
    },

    setAddress(address: string) {
      this.formData.address = address;
    },

    setCity(city: string) {
      this.formData.city = city;
    },

    setAdditionalInfo(info: string) {
      this.formData.additionalInfo = info;
    },

    setFullName(name: string) {
      this.formData.fullName = name;
    },

    setPhone(phone: string) {
      this.formData.phone = phone;
    },

    setEmail(email: string) {
      this.formData.email = email;
    },

    setContactMethod(method: string) {
      this.formData.contactMethod = method;
    },

    setAgreement(value: boolean) {
      this.formData.agreement = value;
    },

    setCityList(list: string[]) {
      this.cityList = list;
    },

    resetErrors() {
      for (const key in this.errors) {
        this.errors[key as keyof typeof this.errors] = '';
      }
    },

    validateStep(): boolean {
      let isValid = true;

      // Сброс ошибок
      this.resetErrors();

      if (this.currentStep === 0) {
        if (!this.formData.service) {
          this.errors.service = 'Выберите услугу';
          isValid = false;
        }
      } else if (this.currentStep === 1) {
        if (!this.formData.objectType) {
          this.errors.objectType = 'Выберите тип объекта';
          isValid = false;
        }
        if (!this.formData.address) {
          this.errors.address = 'Введите адрес объекта';
          isValid = false;
        }
      } else if (this.currentStep === 2) {
        if (!this.formData.fullName) {
          this.errors.fullName = 'Введите ваше ФИО';
          isValid = false;
        }
        if (!this.formData.phone) {
          this.errors.phone = 'Введите ваш телефон';
          isValid = false;
        } else if (!/^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(this.formData.phone)) {
          this.errors.phone = 'Введите телефон в формате +7 (XXX) XXX-XX-XX';
          isValid = false;
        }
        if (!this.formData.email) {
          this.errors.email = 'Введите ваш email';
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
          this.errors.email = 'Введите корректный email';
          isValid = false;
        }
        if (!this.formData.contactMethod) {
          this.errors.contactMethod = 'Выберите предпочтительный способ связи';
          isValid = false;
        }
      } else if (this.currentStep === 3) {
        if (!this.formData.agreement) {
          this.errors.agreement = 'Необходимо согласие на обработку персональных данных';
          isValid = false;
        }
      }

      return isValid;
    },

    async submitForm() {
      if (!this.validateStep()) return;

      this.isSubmitting = true;

      try {
        const requestData = {
          service: this.getServiceInfo().label,
          serviceType: this.getServiceTypeInfo().label,
          objectType: this.formData.objectType,
          address: this.formData.address,
          city: this.formData.city,
          additionalInfo: this.formData.additionalInfo,
          fullName: this.formData.fullName,
          phone: this.formData.phone,
          email: this.formData.email,
          contactMethod: this.formData.contactMethod,
        };

        // Используем функцию из utils/data.ts
        const response = await fetchStepper(requestData);

        if (!response.ok) {
          throw new Error('Ошибка при отправке данных');
        }

        // Переход к шагу успешной отправки
        this.currentStep = 4;
      } catch (error) {
        console.error('Ошибка при отправке заявки:', error);
        alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.');
      } finally {
        this.isSubmitting = false;
      }
    },

    getServiceInfo() {
      const service = itemsForStepperServiceI.find((s) => s.id === this.formData.service);
      return service || { id: 0, label: '' };
    },

    getServiceTypeInfo() {
      // Получаем нужный массив типов услуг в зависимости от выбранной услуги
      const serviceTypes = this.getServiceTypesList();
      const serviceType = serviceTypes.find((type) => type.id === this.formData.serviceType);
      return serviceType || { id: 0, label: '' };
    },

    getServiceTypesList() {
      // Если не выбрана услуга или индекс за пределами массива, возвращаем пустой массив
      if (!this.formData.service || this.formData.service <= 0 || this.formData.service > itemsServiceI.length) {
        return [];
      }

      // Индексы массива начинаются с 0, а ID сервисов с 1
      return itemsServiceI[this.formData.service - 1] || [];
    },
  },
});
