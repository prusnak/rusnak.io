---
layout: post
title: Version sorting in Ruby
---

Today I needed to implement "human sort" for a list of distributions we support in the [Open Build Service](http://openbuildservice.org/). I wanted to sort them alphabetically but at the same time the newest ones at the top. I ended up with the following code:

{% highlight ruby %}
module Enumerable
  def version_sort
    sort_by { |key,val|
       key.gsub(/_SP/,'.').gsub(/_Factory/,'_100').split(/_/) \
          .map { |v| v =~ /\A\d+(\.\d+)?\z/ ? -(v.to_f) : v.downcase }
    }
  end
end

@distros = [
  'openSUSE_Factory_PPC',
  'CentOS_6',
  'openSUSE_11.4',
  'RHEL_4',
  'Mandriva_2010',
  'RHEL_5',
  'Debian_5.0',
  'SLE_10',
  'Ubuntu_9.04',
  'Fedora_14',
  'RHEL_6',
  'Ubuntu_11.04',
  'SLE_11',
  'Mandriva_2009.1',
  'CentOS_5',
  'openSUSE_11.3',
  'Debian_6.0',
  'openSUSE_11.1_Evergreen',
  'Ubuntu_10.04',
  'ScientificLinux_6',
  'openSUSE_Factory',
  'Ubuntu_10.10',
  'SLE_11_SP1',
  'Fedora_15',
  'Ubuntu_8.04',
  'Ubuntu_9.10',
  'Mandriva_2010.1',
]

@distros.version_sort.each{ |v|
  puts v
}
{% endhighlight %}

which produces this list:

{% highlight ini %}
CentOS_6
CentOS_5
Debian_6.0
Debian_5.0
Fedora_15
Fedora_14
Mandriva_2010.1
Mandriva_2010
Mandriva_2009.1
openSUSE_Factory
openSUSE_Factory_PPC
openSUSE_11.4
openSUSE_11.3
openSUSE_11.1_Evergreen
RHEL_6
RHEL_5
RHEL_4
ScientificLinux_6
SLE_11_SP1
SLE_11
SLE_10
Ubuntu_11.04
Ubuntu_10.10
Ubuntu_10.04
Ubuntu_9.10
Ubuntu_9.04
Ubuntu_8.04
{% endhighlight %}

Nifty, right? :-) The idea is simple. I use the `sort_by` function which pre-computes the values that are later compared. I replace some special values like "_Factory" or "_SP", because I want "Factory" to be the newest (100 is higher than any other openSUSE version) and "11_SP1" to behave exactly like "11.1". Then I split the key using the "_" delimiter and turn any string in form "digit" or "digit.digit" to float number. I change the sign, because I want versions to be sorted in the reverse direction. Good thing is that Ruby operator `&lt;=&gt;` works on arrays also, so I'm done with key modifications and the sort does the rest ...

PS: I used `|key,val|` in `sort_by` block because I want to use this function also to sort hashes by their key. This way it works both for arrays and hashes with any further modifications.
