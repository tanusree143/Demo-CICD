public class MethodOverloadingExp {
Public static void showMessageOne(String str1){
System.debug('Frist message='+ str1);
}
Public static void showMessageOne(String str1, Integer one){
    for(integer i = 0; i < one;i++){
      System.debug('Second Message=>'+ Str1+i);
  
    }
}

}